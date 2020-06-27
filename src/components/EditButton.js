import React from 'react';

import { Form, Input, Button, Modal } from 'antd';
import { Table, Tag, Space } from 'antd';

const EditButton = (props) => {
  return props.editable ?
    <>
      <Button type="primary" onClick={props.showModal}>
        Confirm
      </Button>
      <Button type="primary" onClick={props.toggle}>
        Cancel
      </Button>
    </>
    :
    <Button type="primary" onClick={props.toggle}>
      Edit
    </Button>;
};

export default EditButton;
