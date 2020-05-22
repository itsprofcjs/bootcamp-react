import React from 'react';

export interface User {
    id: 1;
    name: 'Leanne Graham';
    username: 'Bret';
    email: 'Sincere@april.biz';
    address: {
        street: 'Kulas Light';
        suite: 'Apt. 556';
        city: 'Gwenborough';
        zipcode: '92998-3874';
        geo: {
            lat: '-37.3159';
            lng: '81.1496';
        };
    };
    phone: '1-770-736-8031 x56442';
    website: 'hildegard.org';
    company: {
        name: 'Romaguera-Crona';
        catchPhrase: 'Multi-layered client-server neural-net';
        bs: 'harness real-time e-markets';
    };
}

interface Props {
    data: User;
}

function UserInfo(props: Props) {
    const user = props.data;

    return (
        <article className="UserInfo box">
            <article className="media">
                <section className="media-left">
                    <figure className="image is-64x64">
                        <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="avatar"
                        />
                    </figure>
                </section>

                <section className="media-content">
                    <section className="content">
                        <p>
                            <strong>{user.name}</strong>{' '}
                            <small>{user.email}</small> <small>31m</small>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean efficitur sit amet massa fringilla
                            egestas. Nullam condimentum luctus turpis.
                        </p>
                    </section>

                    <nav className="level is-mobile">
                        <section className="level-left">
                            <button className="level-item" aria-label="reply">
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-reply"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </button>
                            <button className="level-item" aria-label="retweet">
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-retweet"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </button>
                            <button className="level-item" aria-label="like">
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-heart"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </button>
                        </section>
                    </nav>
                </section>
            </article>
        </article>
    );
}

export default UserInfo;
