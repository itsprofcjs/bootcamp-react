import React from 'react';

import Dummy from './components/dummy';
import UserList from './components/users/UserList';

import './styles/main.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Stay Tuned...</p>

                <Dummy />

                <UserList />
            </header>
        </div>
    );
}

export default App;
