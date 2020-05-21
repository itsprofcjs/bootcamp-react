import React from 'react';

import UserList from './users/UserList';

import './styles/main.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Stay Tuned...</p>

                <UserList />
            </header>
        </div>
    );
}

export default App;
