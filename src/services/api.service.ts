import {
    switchMap,
    catchError,
    retryWhen,
    delay,
    mergeMap,
} from 'rxjs/operators';

import { fromFetch } from 'rxjs/fetch';
import { of, Observable, throwError, from } from 'rxjs';
interface RequestConfig extends RequestInit {
    replaceHeader?: boolean;
    hasAuth?: boolean;
    getRawResponse?: boolean;
    retry?: boolean;
    retryLimit?: number;
    retryDelayInSeconds?: number;
}

const deafultRequestConfig: RequestConfig = {
    method: 'GET',
    replaceHeader: false,
    hasAuth: true,
    getRawResponse: false,
    retry: false,
    retryLimit: 3,
    retryDelayInSeconds: 2,
};

function handleResponse(response: Response, requestConfig: RequestConfig) {
    return (requestConfig.getRawResponse
        ? of(response)
        : from(response.json())
    ).pipe(
        mergeMap((value) => {
            if (response.ok) {
                return of(value);
            } else {
                return throwError(value);
            }
        })
    );
}

function request(url: string, requestConfig: RequestConfig) {
    if (!requestConfig.replaceHeader) {
        let headers: any = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        };

        if (requestConfig.hasAuth) {
            headers = {
                ...headers,
                'x-userId': '0',
                Authorization: 'afjabflabfnlad',
                ...requestConfig.headers,
            };
        } else {
            headers = { ...headers, ...requestConfig.headers };
        }

        requestConfig.headers = headers;
    }

    const delayInMs = requestConfig.retry
        ? (requestConfig.retryDelayInSeconds as number) * 1000
        : 0;

    let remainingRetry = requestConfig.retry
        ? (requestConfig.retryLimit as number)
        : 0;

    return fromFetch(url, requestConfig).pipe(
        switchMap((response: Response) => {
            return handleResponse(response, requestConfig);
        }),
        retryWhen((errors: Observable<any>) =>
            errors.pipe(
                mergeMap((error) => {
                    if (remainingRetry-- > 0) {
                        return of(error).pipe(delay(delayInMs));
                    } else {
                        return throwError(error);
                    }
                })
            )
        ),
        catchError((error) => {
            return throwError({ error: true, message: '', ...error });
        })
    );
}

const ApiService = {
    get(url: string, requestConfig?: RequestConfig) {
        return request(url, {
            ...deafultRequestConfig,
            ...requestConfig,
            method: 'GET',
        });
    },
    post(url: string, requestConfig?: RequestConfig) {
        return request(url, {
            ...deafultRequestConfig,
            ...requestConfig,
            method: 'POST',
        });
    },
    put(url: string, requestConfig?: RequestConfig) {
        return request(url, {
            ...deafultRequestConfig,
            ...requestConfig,
            method: 'PUT',
        });
    },
    patch(url: string, requestConfig?: RequestConfig) {
        return request(url, {
            ...deafultRequestConfig,
            ...requestConfig,
            method: 'PATCH',
        });
    },
    delete(url: string, requestConfig?: RequestConfig) {
        return request(url, {
            ...deafultRequestConfig,
            ...requestConfig,
            method: 'DELETE',
        });
    },
};

export default ApiService;
