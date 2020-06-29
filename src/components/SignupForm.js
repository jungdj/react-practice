import React from "react";
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


import '../App.css'

const SignupForm = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
        props.showModal('회원가입이 완료됐습니다. 로그인을 해주세요.')
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            이메일
            <Form.Item
                name="email"
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

            비밀번호 확인
            <Form.Item
                name="password_check"
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해 주세요!',
                    },
                ]}
            >
                <Input.Password
                    placeholder="비밀번호 확인"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>

            휴대폰 번호
            <Form.Item
                name="phone_number"
                rules={[
                    {
                        required: true,
                        message: '휴대폰 번호를 입력해 주세요!',
                    },
                ]}
            >
                <Input placeholder="휴대폰 번호 (-없이 숫자만)" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                    가입하기
                </Button>
            </Form.Item>

            <Form.Item>
                이미 계정이 있으신가요? <Button type="link" onClick={props.goLoginForm}>로그인</Button>
            </Form.Item>

        </Form>
    );
}

export default SignupForm;