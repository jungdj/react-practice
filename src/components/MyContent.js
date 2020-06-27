import React from 'react';

import { Modal } from 'antd';

import RegisterForm from './RegisterForm';
import EditButton from './EditButton';
import UserListTable from './UserListTable';

const MyContent2 = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [editable, setEditable] = React.useState(false);

  return (
    <div>
      <RegisterForm
        editable={editable}
        showModal={() => setVisible(true)}
      />
      <EditButton
        editable={editable}
        toggle={this.toggleEditable}
        showModal={this.showModal}
      />
      <UserListTable />
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
};

class MyContent extends React.Component {
  state = { visible: false, editable: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  toggleEditable = () => {
    this.setState(prevState => {
      return {
        editable: !prevState.editable,
      }
    })
  }

  render() {
    return (
      <div>
        <RegisterForm
          editable={this.state.editable}
          showModal={this.showModal}
        />
        <EditButton
          editable={this.state.editable}
          toggle={this.toggleEditable}
          showModal={this.showModal}
        />
        <UserListTable />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }

}

export default MyContent;
