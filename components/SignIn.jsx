import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../firebase';
import { navigate } from '@reach/router';


const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onSignIn = () => {

        auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log('You signed in! :)')
                // result.user.tenantId should be 'TENANT_PROJECT_ID'.
                navigate(`/posts`);

            }).catch(function (error) {
                // Handle error.
                console.log('error in signin: ', error);
            })
        // setEmail((''));
        // setPassword('');
    }

    return (

        <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Sign In"
                />
            </div>

            <div className="sign_up_container_inputs">
                <div className="sign_up_input_container">
                    <div className="sign_up_input_title">
                        <h2>
                            E-mail:
                        </h2>
                    </div>

                    <div className="post_input">
                        <Input placeholder="Enter E-mail" onChange={onEmailChange} />
                    </div>
                </div>
                <div className="sign_up_input_container">
                    <div className="sign_up_input_title">
                        <h2>
                            Password:
                    </h2>
                    </div>

                    <div className="post_input">
                        <Input.Password placeholder="Enter Password" onChange={onPasswordChange} />
                    </div>
                </div>
                <div style={{ float: 'left', marginTop: '20px' }}>
                    Don't have an account? <a href="#">Sign up here!</a>
                </div>
                <div className="post_input_button">

                    <Button type="primary" size="large" onClick={onSignIn}>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;