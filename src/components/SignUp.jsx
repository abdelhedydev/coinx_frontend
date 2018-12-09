import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_USER = gql`
  mutation register($email: String!,$password:String!) {
   register(input: {email:$email,password:$password}){
      user{
        id
      }
   }
  }
`;

const SignUp = () => (
  <div>
    <Mutation mutation={ADD_USER}>
      {(register) => (
        <Modal trigger={<Button>Inscrivez vous</Button>}>
          <Modal.Header>Inscrivez vous</Modal.Header>
          <Modal.Description>
            <Form
              style={{ padding: '2px' }}
              onSubmit={(e) => {
                e.preventDefault();
                const { email, password } = e.target.elements;
                register({ variables: { email: email.value, password: password.value } });
              }}
            >
              <Form.Group unstackable widths={2}>
                <Form.Input label="Nom" placeholder="Nom" />
                <Form.Input label="Prénom" placeholder="Prénom" />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="E-mail" placeholder="E-mail" name="email" />
                <Form.Input label="Password" placeholder="Mot de passe" type="password" name="password" />
              </Form.Group>
              <Form.Checkbox label="J'accepte les conditions d'utilisation" />
              <Button type="submit" color="yellow">enregistrer</Button>
            </Form>
          </Modal.Description>
        </Modal>
      )}
    </Mutation>
  </div>
);
export default SignUp;
