import React from 'react';
import { Button, Modal, Form, Divider, Icon } from 'semantic-ui-react';

const Login = () => (
  <Modal
    trigger={
      <Button icon labelPosition="left" style={{ height: '36px' }} color="green">
        <Icon name="sign-in" />
        Connexion
      </Button>}
  >
    <Modal.Header>Connectez vous</Modal.Header>
    <Modal.Description>
      <Form style={{ padding: '2px' }}>
        <Form.Group widths="equal">
          <Form.Field label="Veuillez saisir votre mail" control="input" placeholder="E-mail" type="email" />
          <Form.Input label="veuillez saisir votre mot de passe" type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Button type="submit" color="yellow" >Enregister</Button>
        <Divider hidden />
      </Form>

    </Modal.Description>
  </Modal>
);
export default Login;
