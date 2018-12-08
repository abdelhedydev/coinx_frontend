import React from 'react';
import { Grid } from 'semantic-ui-react';

import '../styles/footer.css';

const Footer = () => (
  <Grid columns={3}>
    <Grid.Row className="foot">
      <Grid.Column>
        <a className="link" href="/">Conditions d{"'"}utilisation</a>
        <br />
        <a className="link" href="/">Données privées</a>
      </Grid.Column>
      <Grid.Column>
        <a className="link" href="/">Aide</a>
        <br />
        <a className="link" href="/">Politique relative au cookies</a>
      </Grid.Column>
      <Grid.Column >
        <a className="link" href="/">Contactez-nous</a>
        <br />
        <a className="link" href="/">shops</a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;
