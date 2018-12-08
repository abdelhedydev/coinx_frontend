import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Slider {...settings}>
        <div>
          <img src="https://wallpapercave.com/wp/w4SpoaK.jpg" alt="" style={{ width: '100%', height: '630px' }} />
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/HPNhFUw.jpg" alt="" style={{ width: '100%', height: '630px' }} />
        </div>

      </Slider>
    </div>
  );
};

export default SliderComp;
