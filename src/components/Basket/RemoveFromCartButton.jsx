import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';


const UPDATE_ITEM = gql`
  mutation updateItem($itemNumber: Int!,$productId: ID!) {
    add(input: {itemNumber: $itemNumber,productId: $productId}) {
      id
      name
      description
      quantity
    }
  }
`;

const BUTTON = styled.button`
  flex-grow: 1;
  background-color: red;
  border: none;
  margin-left: 2px;
  border-radius: 2px;
  float: right;
  color: white;
  padding: 8px 25px;
  text-Decoration: none;
  display: block;
  font-size: 12px;
  cursor: pointer;
`;

function RemoveFromCartButton({ element, remove }) {
  return (
    <Mutation mutation={UPDATE_ITEM}>
      {(updateItem) => (
        <span>
          <BUTTON
            onClick={(e) => {
              e.preventDefault();
              updateItem({
                variables: { itemNumber: element.quantity, productId: element.id },
              }).catch(() => (remove(element)));
            }}
          ><i className="fas fa-trash-alt"></i>
          </BUTTON>
        </span>
      )}
    </Mutation>
  );
}

RemoveFromCartButton.propTypes = {
  element: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default RemoveFromCartButton;
