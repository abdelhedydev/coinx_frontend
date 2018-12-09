import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
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
          <img src="https://i.pinimg.com/originals/47/e2/9d/47e29d494f4c72fde228a1d2abc842bd.jpg" alt="" style={{ width: '100%', height: '630px' }} />
        </div>
        <div>
          <img src="http://www.ncaa.org/sites/default/files/Sum2018CM_SL_Crispell_Jul18_QuinnWadas2_20180718.jpg" alt="" style={{ width: '100%', height: '630px' }} />
        </div>
        <div>
          <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/13/14/hannah-cockroft.jpg" alt="" style={{ width: '100%', height: '630px' }} />
        </div>

      </Slider>
    </div>
  );
};

export default SliderComp;
