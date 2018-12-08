import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home';
import ShowCard from './components/ShowCard';

const App = () => (
  <div>
    {/* <Header />
    <Home />
    <Footer /> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({ history }) => <Home {...history} />} />
        <Route path="/articles/:idArticle" render={({ match: { params } }) => <ShowCard showCardId={params.idArticle} />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
