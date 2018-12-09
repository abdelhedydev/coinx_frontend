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
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title} </Card.Header>
          <Card.Meta>
            <span className="date">{userName}</span>
          </Card.Meta>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="/">
            <img src="/images/picto/pictoIcon.png" style={{ width: '30px' }} alt="" />
            {price}
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

