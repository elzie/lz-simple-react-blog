import React from 'react';
import Posts from './Posts';

function App(props) {
    return (
        <div className="app_container">
            <h1>Welcome {props.name}</h1>
            This is the way..
            <Posts />
        </div>
    )
}

export default App;