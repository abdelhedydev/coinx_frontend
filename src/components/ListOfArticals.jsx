import React from 'react';
import { Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import CardExampleCard from './Card';
import { Articals } from '../Data/AllArticals';

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

        </Grid.Row>
      </Grid>

    </div>
  );
};
export default ArticalsList;
