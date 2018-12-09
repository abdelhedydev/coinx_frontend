/* eslint-disable no-console */
import React, { Fragment } from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';

// import { CONTAINER, TABLE, TR, TH, Td } from '../Styles';


// const ORDER_HISTORY = gql`
//     query orderHistory($user: ID!){
//         orderHistory(user: $user){
//             id
//             created_at
//             products{
//                 id
//                 name
//                 quantity
//                 price
//             }
//             totalPrice
//         }
//     }
// `;

const OrderHistory = () => (
  <Fragment>
    Orders History
  </Fragment>
  // <CONTAINER>
  //   <Query query={ORDER_HISTORY} variables={{ user: sessionStorage.getItem('user') }} >
  //     {
  //       ({ loading, error, data: { orderHistory } }) => {
  //         if (loading) {
  //           return (
  //             <h4>Loading...</h4>
  //           );
  //         }
  //         if (error) return <p>Error `${error}`</p>;
  //         console.log(orderHistory);
  //         const result = orderHistory.map((element) => (
  //           <Fragment>
  //             <TR>
  //               <Td>
  //               </Td>
  //             </TR>
  //             <TR>
  //               <table>
  //                 <thead>
  //                   <td>product</td><td>quantity</td><td>pr</td>
  //                 </thead>
  //                 {/* {
  //                 element.products.map((element) => (
  //                     ));
  //               } */}
  //               </table>
  //             </TR>
  //           </Fragment>
  //         ));
  //         return (
  //           <TABLE>
  //             <thead>
  //               <TR>
  //                 <TH>Oreder</TH>
  //               </TR>
  //             </thead>
  //             <tbody>
  //               {
  //                 result
  //               }
  //             </tbody>
  //           </TABLE>
  //         );
  //       }
  //     }
  //   </Query>
  // </CONTAINER>
);

export default OrderHistory;
