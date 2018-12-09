/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: 0,
      images: '',
      quantity: 0,
    };
  }
  render() {
    return (
      <div style={{ margin: '80px' }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
              placeholder="Gender"
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
          />
        </Form>
      </div>
    );
  }
}

export default AddProduct;
