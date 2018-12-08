/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Grid, Image, Input } from 'semantic-ui-react';
import Login from './Login';
import SignUp from './SignUp';
import '../styles/header.css';
const Header = () =>
  (
    <Grid className="header">
      <Grid.Column width={2}>
        <Image className="img" src="/images/coinx.png" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Input className="search" style={{ width: '70%' }} placeholder="Search..." />
      </Grid.Column>
      <Grid.Column width={2}>
        <Login />
      </Grid.Column>
      <Grid.Column width={2}>
        <SignUp />
      </Grid.Column>
    </Grid>
  );

// Header.propTypes = {
//   username: PropTypes.string,
//   age: PropTypes.string,
// };

export default Header;
