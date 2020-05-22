import React, { useState, useEffect } from 'react';

import ApiService from '../../services/api.service';

import UserInfo, { User } from './UserInfo';

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        ApiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (data: User[]) => {
                console.log(data);
                setUsers(data);
            },
            (error) => console.error(error),
            () => {
                console.log('Completed!');
            }
        );
    }, []);

    return (
        <article className="UserList is-flex">
            {users.map((user: User, idx: number) => (
                <UserInfo key={idx} data={user} />
            ))}
        </article>
    );
}

export default UserList;
