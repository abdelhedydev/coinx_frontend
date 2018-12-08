import React from 'react';
import { Button, Modal, Form, Divider } from 'semantic-ui-react';

const Login = () => (
  <Modal trigger={<Button>Log In</Button>}>
    <Modal.Header>Connectez vous</Modal.Header>
    <Modal.Description>
      <Form style={{ padding: '3%' }}>
        <Form.Group widths="equal">
          <Form.Field label="Veuillez saisir votre mail" control="input" placeholder="Email" type="email" />
          <Form.Input label="veuillez saisir votre mot de passe" type="password" />
        </Form.Group>
        <Button type="submit" color="yellow" >Submit</Button>
        <Divider hidden />
      </Form>

    </Modal.Description>
  </Modal>
);
export default Login;
