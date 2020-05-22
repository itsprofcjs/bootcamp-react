import React from 'react';

import ApiService from '../services/api.service';

function Dummy() {
    // const url = 'https://jsonplaceholder.typicoe.com/usrs';
    const url = 'http://localhost:3001/users';

    ApiService.get(url, {
        // retry: true,
        // getRawResponse: true,
    }).subscribe(
        (data) => console.log(data),
        (error) => console.error(error),
        () => {
            console.log('Completed!');
        }
    );

    return <h1> This is Just for POC </h1>;
}

export default Dummy;
