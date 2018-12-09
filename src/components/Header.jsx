/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Input } from 'semantic-ui-react';
import Login from './Login';
import SignUp from './SignUp';
import '../styles/header.css';
const Header = ({ articleCount }) => {
  console.log(articleCount);
  return (
    <Grid className="header">
      <Grid.Column centered width={2}>
        <Image className="img" src="/images/picto/icon.png" style={{ width: '70%', margin: 'auto' }} />
      </Grid.Column>
      <Grid.Column width={8}>
        <Input className="search" style={{ width: '70%' }} placeholder="Search..." />
      </Grid.Column>
      <Grid.Column width={2}>
        <Login />
      </Grid.Column>
      <Grid.Column width={2}>
        <SignUp />
      </Grid.Column>
      <Grid.Column width={2}>
        <i className="shopping cart icon">{articleCount}</i>
      </Grid.Column>
    </Grid>
  );
};

Header.propTypes = {
  articleCount: PropTypes.number,
};

export default Header;
