import { Button, Input, Layout } from 'antd';
import React from 'react';

const RegisterForm = (props) => {
  if (props.editable) return null;
  return (
    <Layout style={{ flexDirection: 'row' }}>
      <label>Username:</label>
      <Input name="username" placeholder="username" />
      <Button type="primary" onClick={() => props.setVisible(true)}>Register</Button>
    </Layout>
  )
}

export default RegisterForm;
