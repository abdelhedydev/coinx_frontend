import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { find } from 'lodash';
import { Grid, Image, Button } from 'semantic-ui-react';
import { Articals } from '../Data/AllArticals';


const ShowCard = ({ showCardId, history }) => {
  const DataProd = find(Articals, { id: showCardId });
  return (
    <div style={{ margin: '80px' }}>
      <Grid columns="equal">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image style={{ width: '300px', height: '300px', margin: 'auto' }} src={DataProd.image} />
          </Grid.Column>
          <Grid.Column>
            <h3>{DataProd.title}</h3>
            <h6>{DataProd.userName}</h6>
            <div style={{ width: '60%', marginBottom: '10px' }}>
              <p>{DataProd.desc}</p>
            </div>
            <div>{DataProd.price}</div>
            <Button style={{ marginTop: '50px' }} >Add to cart</Button>
            <Button style={{ marginTop: '50px' }} onClick={() => history.goBack()} >Back</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

ShowCard.propTypes = {
  showCardId: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(ShowCard);
