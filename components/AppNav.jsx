import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, navigate } from '@reach/router';
import {
    UnorderedListOutlined,
    HighlightOutlined,
    LogoutOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { auth } from '../firebase';

const AppNav = (props) => {

    console.log('AppNav Props: ', props);
    // const onSignOut = () => {
    //     console.log('signing out...');

    //     auth.signOut().then(function () {
    //         // Sign-out successfull.
    //         console.log('User signed out.');
    //         setUser(false);
    //     }).catch(function () {
    //         // An error happened.
    //     });
    //     navigate(`/sign_in`);
    //     console.log('AppNav Props Signed out: ', props);

    // }
    return (
        <div className="app_main_navigation">
            <Menu mode="horizontal">
                {props.user &&

                    <Menu.Item key="posts">
                        <UnorderedListOutlined />
                        <Link to={`/blogs/${props.user.uid}/posts`}>
                            Posts
                    </Link>
                    </Menu.Item>
                }
                {props.user &&


                    <Menu.Item key="create_post">
                        <HighlightOutlined />
                        <Link to="/create_post">
                            Create Post
                        </Link>
                    </Menu.Item>
                    // (user &&) IF statement with only one condition to be met
                }


                {!props.user
                    ?
                    <Menu.Item key="sign_in" style={{ float: 'right' }}>
                        <LoginOutlined />
                        <Link to="/sign_in" style={{ float: 'right' }}>
                            Sign In
                            </Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="sign_out" style={{ float: 'right' }}>
                        <LogoutOutlined />
                        <div onClick={props.onSignOut} style={{ float: 'right' }}>
                            Sign OUT
                            </div>
                    </Menu.Item>
                    // Basically an IF statement
                }


            </Menu>
        </div>
    )
}

export default AppNav;