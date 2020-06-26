import React from 'react';

import { Layout, Button, Input } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Modal } from 'antd';

const RegisterForm = () => {
  return (
    <Layout style={{ flexDirection: 'row' }}>
      <label>Username:</label>
      <Input name="username" placeholder="username" />
      <Button type="primary">Register</Button>
    </Layout>
  )
}

const EditButton = (props) => {
  if (props.edit) {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Button type={'primary'}>Confirm</Button>
        <Button type={'primary'}>Cancel</Button>
      </Layout>
    )
  } else {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Button type={'primary'}>Edit</Button>
      </Layout>
    )
  }
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const UserListTable = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

const MyContent = () => {
  return (
    <div>
      {/*<h1>Register Form</h1>*/}
      <RegisterForm />
      {/*<h1>Edit Button</h1>*/}
      <EditButton />
      {/*<h1>UserListTable</h1>*/}
      <UserListTable />
      <Modal
        title="Basic Modal"
        visible={false}
        // onOk={this.handleOk}
        // onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default MyContent;
