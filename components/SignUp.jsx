import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { auth } from '../firebase';
const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSignUp = () => {
        console.log('Sign up data: ', email, password);

        auth.createUserWithEmailAndPassword(email, password)
            .catch(function () {
                // Handle Errors. 
                var errorCode = error.code;
                var errorMessage = error.message;
                // ... 
                console.log('Sign Up failed!');

            });

        // setEmail((''));
        // setPassword('');
        // NOTE : does not work.
    }

    return (

        <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Sign Up"
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
                    Allready have an account? <a href="#">Sign in here!</a>
                </div>
                <div className="post_input_button">
                    <Button type="primary" size="large" onClick={onSignUp}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;