import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import BasketItem from './BasketItem';
import { CONTAINER, TABLE, TR, TH, Td, BUTTON } from '../Styles';


const VALIDATE_ORDER = gql`
  mutation validateOrder($order: OrderInput!){
    validateOrder(input: $order ){
      id
    }
  }
`;

function Basket({ basketItems, totalPrice, remove }) {
  const basketTab = (basketItems.length !== 0) ? basketItems.map((element) => (
    <BasketItem key={element.id} element={element} remove={remove} />
  )) : <TR><Td colSpan="5">Cart is empty</Td></TR>;

  const removeAll = () => {
    basketItems.forEach((element) => {
      remove(element);
    });
  };
  return (
    <CONTAINER theme={{ width: '70%' }} style={{ paddingLeft: '15%' }}>
      <CONTAINER>
        <TABLE>
          <thead>
            <TR>
              <TH>Name</TH><TH>Price</TH><TH>Quantity</TH><TH>Total</TH><TH>Actions</TH>
            </TR>
          </thead>
          <tbody>
            {basketTab}
            <TR><Td colSpan="3">Total</Td><Td>{ totalPrice }</Td></TR>
          </tbody>
        </TABLE>
      </CONTAINER>
      <Mutation
        mutation={VALIDATE_ORDER}
        variables={{
          order: {
            products: basketItems,
            totalPrice,
            user: sessionStorage.getItem('user'),
          },
        }}
      >
        {
          (validateOrder) =>
            (
              <BUTTON
                theme={{ width: '20%' }}
                onClick={async () => {
                  await validateOrder();
                  removeAll();
                }}
              >
              Validate Order
              </BUTTON>)
        }
      </Mutation>
      <NavLink to="order-history"> History </NavLink>
    </CONTAINER>
  );
}

Basket.propTypes = {
  basketItems: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Basket;
