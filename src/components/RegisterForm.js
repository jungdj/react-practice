import React from 'react';
import { Button, Form, Input } from 'antd';

const RegisterForm = (props) => {
  if (props.editable) {
    return null;
  }
  return (
    <Form
      layout="inline"
    >
      <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={props.showModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default RegisterForm;
