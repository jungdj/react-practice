import React from "react";

import { Modal, Button } from 'antd';

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const MainContent = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [loginMode, setLoginMode] = React.useState(true);
    const [modalMessage, setModalMessage] = React.useState('');

    function showModal(msg) {
        setModalMessage(msg);
        setVisible(true);
    }

    return (
        <div>
            {loginMode ?
                <LoginForm goSignupForm={() => setLoginMode(false)} showModal={(msg) => showModal(msg)}/>
                :
                <SignupForm goLoginForm={() => setLoginMode(true)} showModal={(msg) => showModal(msg)}/>
            }
            <Modal
                visible={visible}
                footer={[
                    <Button key="submit" type="primary" onClick={() => setVisible(false)}>
                        확인
                    </Button>,
                ]}
            >
                <p>{modalMessage}</p>
            </Modal>
        </div>
    )
}

export default MainContent;