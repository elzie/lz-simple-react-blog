import React, { useState } from 'react';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AppNav from './AppNav';

import { Router, Link, navigate } from '@reach/router';
import { Menu } from 'antd';
import {
    UnorderedListOutlined,
    HighlightOutlined,
    LogoutOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { auth } from '../firebase';

function App(props) {

    const [user, setUser] = useState(false);
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User signed in.
            console.log('User is signed in.', user);
            setUser(user);
        } else {
            // No user signed in.
            console.log('No user signed in.');
        }
    });

    const onSignOut = () => {
        console.log('signing out...');

        auth.signOut().then(function () {
            // Sign-out successfull.
            console.log('User signed out.');
            setUser(false);
        }).catch(function () {
            // An error happened.
        });
        // navigate('/');
    }

    return (
        <div className="app_container">
            <h1>Welcome {user &&
                user.email}</h1>
            This is the way..

            <AppNav user={user} onSignOut={onSignOut} />

            <Router>
                <SignIn path="sign_in" default />
                <SignUp path="sign_up" />
                <Posts path="blogs/:uid/posts" user={user} />
                <Post path="blogs/:uid/post/:id" user={user} />
                <CreatePost path="create_post" user={user} />
                <UpdatePost path="update_post/:id" user={user} />
            </Router>
        </div>
    )
}

export default App;
