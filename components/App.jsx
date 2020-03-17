import React from 'react';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';

import { Router, Link } from '@reach/router';
import { Menu } from 'antd';
import {
    UnorderedListOutlined,
    HighlightOutlined
} from '@ant-design/icons';

function App(props) {
    return (
        <div className="app_container">
            <h1>Welcome {props.name}</h1>
            This is the way..

            <div className="app_main_navigation">
                <Menu mode="horizontal">

                    <Menu.Item key="posts">
                        <UnorderedListOutlined />
                        <Link to="/posts">
                            Posts
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="create_post">
                        <HighlightOutlined />
                        <Link to="/create_post/:id">
                            Create Post
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>

            <Router>
                <SignIn path="sign_in" default />
                <SignUp path="sign_up" />
                <Posts path="posts" />
                <Post path="post/:id" />
                <CreatePost path="create_post" />
                <UpdatePost path="update_post/:id" />
            </Router>
        </div>
    )
}

export default App;
