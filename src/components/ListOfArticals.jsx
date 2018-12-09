/* eslint-disable no-console */
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import CardExampleCard from './Card';
import { Articals } from '../Data/AllArticals';


const GET_ALL_PRODUCTS = gql`
  query{
    products{
      id
      name
      description
      quantity
      price
      images {
        path
      }
    }
  }
`;

const ArticalsList = () => {
  const articles = map(Articals, (artical, index) => (
    <Grid.Column>
      <CardExampleCard item={artical} key={index} />
    </Grid.Column>
  ));

  return (
    <div>
      <Grid>
        <Grid.Row columns={4}>
          {articles }
          <Query query={GET_ALL_PRODUCTS} >
            {
              ({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) return <h4>Error: `${error}`</h4>;
                console.log(data);
                return null;
              }
            }
          </Query>
        </Grid.Row>
      </Grid>

    </div>
  );
};
export default ArticalsList;
