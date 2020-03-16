import React from 'react';
import Posts from './Posts';
import Post from './Post';
import { Router } from '@reach/router';

function App(props) {
    return (
        <div className="app_container">
            <h1>Welcome {props.name}</h1>
            This is the way..
            <Router>
                <Posts default />
                <Post path="post/:id" />
            </Router>
        </div>
    )
}

export default App;