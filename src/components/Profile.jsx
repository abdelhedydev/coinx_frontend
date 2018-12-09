import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Review from './Review';
import Productlist from './ListOfArticals';

const Profile = () => (
  <div style={{ marginTop: '50px' }}>
    <Grid centered>
      <Grid.Row centered columns={2}>
        <Grid.Column centered width={3}>
          <Image src="https://image.flaticon.com/icons/svg/236/236832.svg" size="small" circular />
        </Grid.Column>
        <Grid.Column centered width={5}>
          <h1>Imen ben Mohamed</h1>
          <h3>Développeur full stack JS</h3>
          <h4>Tél : 88855852</h4>
          <p>Adresse: Tunis </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Productlist />
      </Grid.Row>
      <Grid.Row>
        <Review />
      </Grid.Row>
    </Grid>
  </div>
);

// eslint-disable-next-line no-unused-vars


export default Profile;
