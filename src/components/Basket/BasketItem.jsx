import React from 'react';
import PropTypes from 'prop-types';

import RemoveFromCartButton from './RemoveFromCartButton';
import { TR, Td } from '../Styles';


function BasketItem({ element, remove }) {
  return (
    <TR>
      <Td>{element.name}</Td>
      <Td>{element.price}</Td>
      <Td>{element.quantity}</Td>
      <Td>{element.price * element.quantity}</Td>
      <Td> <RemoveFromCartButton element={element} remove={remove} /></Td>
    </TR>
  );
}

BasketItem.propTypes = {
  element: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default BasketItem;
