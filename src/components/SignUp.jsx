import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

const SignUp = () => (
  <div>
    <Modal trigger={<Button>Sign up</Button>}>
      <Modal.Header>Inscrivez vous</Modal.Header>
      <Modal.Description>
        <Form style={{ padding: '3%' }}>
          <Form.Group unstackable widths={2}>
            <Form.Input label="Nom" placeholder="Nom" />
            <Form.Input label="Prénom" placeholder="Prénom" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Addresse" placeholder="Addresse" />
            <Form.Input label="Numéro de téléphone" placeholder="Numéro de téléphone" />
          </Form.Group>
          <Form.Checkbox label="J'accepte les conditions d'utilisation" />
          <Button type="submit" color="yellow">enregistrer</Button>
        </Form>
      </Modal.Description>
    </Modal>
  </div>
);
export default SignUp;
