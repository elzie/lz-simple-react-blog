import React from 'react';
import { PageHeader, Input, Button } from 'antd';

const SignIn = (props) => {
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
                        <Input placeholder="Enter E-mail" />
                    </div>
                </div>
                <div className="sign_up_input_container">
                    <div className="sign_up_input_title">
                        <h2>
                            Password:
                    </h2>
                    </div>

                    <div className="post_input">
                        <Input placeholder="Enter Password" />
                    </div>
                </div>
                <div style={{ float: 'left', marginTop: '20px' }}>
                    Don't have an account? <a href="#">Sign up here!</a>
                </div>
                <div className="post_input_button">

                    <Button type="primary" size="large">Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;