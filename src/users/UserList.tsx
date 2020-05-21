import React, { useState, useEffect } from 'react';

import UserInfo, { User } from './User';

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response: Response) => {
                response.json().then((data: User[]) => {
                    setUsers(data);
                });
            }
        );
    }, []);

    return (
        <article className="UserList">
            {users.map((user: User, idx: number) => (
                <UserInfo key={idx} data={user} />
            ))}
        </article>
    );
}

export default UserList;
