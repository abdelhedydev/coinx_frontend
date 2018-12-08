import React from 'react';
import ListOfArticals from './ListOfArticals';
import SliderComp from './SimpleSlider';
import Footer from './Footer';
import Header from './Header';
const Home = () => (
  <div>
    <Header />
    <SliderComp />
    <div style={{ margin: '50px' }} >
      <ListOfArticals />
    </div>
    <Footer />
  </div>
);
export default Home;
