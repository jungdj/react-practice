import React from "react";
import { Form, Input, Button } from 'antd';

import '../App.css'
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const LoginForm = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
        props.showModal('로그인 되었습니다.')
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            이메일
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '이메일을 입력해 주세요!',
                    },
                ]}
            >
                <Input placeholder="이메일" />
            </Form.Item>

            비밀번호
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해 주세요!',
                    },
                ]}
            >
                <Input.Password
                    placeholder="비밀번호"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                    로그인
                </Button>
            </Form.Item>

            <Form.Item>
                계정이 필요하신가요? <Button type="link" onClick={props.goSignupForm}>가입하기</Button>
            </Form.Item>

        </Form>
    );
}

export default LoginForm;