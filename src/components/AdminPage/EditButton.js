import { Button, Layout } from 'antd';
import React from 'react';

const EditButton = (props) => {
  if (props.editable) {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Button type={'primary'} onClick={() => props.setVisible(true)}>Confirm</Button>
        <Button type={'primary'} onClick={() => props.setEditable(false)}>Cancel</Button>
      </Layout>
    )
  } else {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Button type={'primary'} onClick={() => props.setEditable(true)}>Edit</Button>
      </Layout>
    )
  }
}

export default EditButton;
