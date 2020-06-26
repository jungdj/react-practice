import React from 'react';
import { useState } from 'react';

import { Modal } from 'antd';

import RegisterForm from './RegisterForm';
import EditButton from './EditButton';
import UserListTable from './UserListTable';

const MyContent = () => {
  const [visible, setVisible] = useState (false);
  const [editable, setEditable] = useState(false);

  return (
    <div>
      {/*<h1>Register Form</h1>*/}
      <RegisterForm editable={editable} setVisible={setVisible} />
      {/*<h1>Edit Button</h1>*/}
      <EditButton editable={editable} setEditable={setEditable} setVisible={setVisible} />
      {/*<h1>UserListTable</h1>*/}
      <UserListTable />
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => {
          setEditable(false);
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default MyContent;
