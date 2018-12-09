/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';

import ReactDropzone from 'react-dropzone';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';


const ADD_PRODUCT = gql`
    mutation addProduct($product: ProductInput){
        addProduct(input: $product){
            id
        }
    }
`;

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: 0,
      images: [],
      quantity: 0,
    };
  }
   handleChange = (event) => {
     const value = (event.target.id === 'price' || event.target.id === 'quantity') ? parseFloat(event.target.value) : event.target.value;
     this.setState({ [event.target.id]: value });
     console.log(this.state);
   };
   handleFileChange = (files) => {
     this.setState({ images: files });
     console.log(this.state);
   };
   render() {
     return (
       <div style={{ margin: '80px' }}>
         <Form>
           <Form.Group widths="equal">
             <Form.Field
               id="name"
               control={Input}
               value={this.state.name}
               label="Nom du produit"
               onChange={this.handleChange}
               placeholder="Nom du produit"
             />
             <Form.Field
               id="price"
               control={Input}
               label="Prix du produit"
               onChange={this.handleChange}
               value={this.setState.price}
               placeholder="Prix"
             />
             <Form.Field
               control={Select}
               label={{ children: 'Categories', htmlFor: 'form-select-control-gender' }}
               placeholder="Categorie"
               search
               searchInput={{ id: 'form-select-control-gender' }}
             />
           </Form.Group>
           <Form.Field
             id="description"
             control={TextArea}
             onChange={this.handleChange}
             value={this.state.description}
             label="Description du produit"
             placeholder="Description...."
           />
           <ReactDropzone onDrop={this.handleFileChange} />
           <Mutation
             mutation={ADD_PRODUCT}
           >
             {
               (addProduct) => (
                 <Form.Field
                   id="form-button-control-public"
                   control={Button}
                   content="Ajouter"
                   label="Ajouter Produit"
                   onClick={async () => {
                     try {
                       await addProduct({
                         variables: {
                           product: {
                             name: this.state.name,
                             description: this.state.description,
                             price: this.state.price,
                             quantity: this.state.quantity,
                             images: this.state.images,
                           },
                         },
                       });
                       this.props.history.goBack();
                     } catch (err) {
                       console.log(err);
                     }
                   }}
                 />
               )
             }
           </Mutation>
         </Form>
       </div>
     );
   }
}

export default withRouter(AddProduct);
