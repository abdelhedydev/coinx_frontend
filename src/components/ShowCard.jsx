import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { find } from 'lodash';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import { Articals } from '../Data/AllArticals';


const ShowCard = ({ showCardId, addToCart, history }) => {
  const DataProd = find(Articals, { id: showCardId });
  return (
    <div style={{ margin: '40px' }}>
      <Button style={{ marginLeft: '40px' }} onClick={() => history.goBack()} ><Icon name="arrow alternate circle left" /></Button>
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
            <div> <h4>Points:</h4> {DataProd.price}  CX</div>
            <Button icon labelPosition="left" style={{ height: '36px' }} color="blue" onClick={() => { addToCart(DataProd, 1); }}>
              <Icon name="cart" />
              Ajouter
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

ShowCard.propTypes = {
  showCardId: PropTypes.string,
  addToCart: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(ShowCard);
