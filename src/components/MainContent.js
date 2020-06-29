import React from "react";

import { Modal } from 'antd';

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const MainContent = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [loginMode, setLoginMode] = React.useState(true);

    return (
        <div>
            {loginMode ?
                <LoginForm goSignupForm={() => setLoginMode(false)}/>
                :
                <SignupForm goLoginForm={() => setLoginMode(true)}/>
            }
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default MainContent;