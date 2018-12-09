import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

const CardExampleCard = ({ item, history }) => {
  const {
    image,
    userName,
    title,
    price,
    desc,
    id,
  } = item;
  return (
    <div style={{ marginBottom: '30px' }}>
      <Card onClick={() => { history.push(`/articles/${id}`); }}>
        <Image src={image} style={{ height: '250px' }} />
        <Card.Content>
          <Card.Header>{title} </Card.Header>
          <Card.Meta>
            <span className="date">{userName}</span>
          </Card.Meta>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="/">
            {price}
            <img src="/images/picto/pictoIcon.png" style={{ width: '24px', marginLeft: '10px' }} alt="" />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};
CardExampleCard.propTypes = {
  item: PropTypes.object,
  history: PropTypes.object,
};


export default withRouter(CardExampleCard);

