import React from 'react';
import {Swiper} from 'swiper/dist/js/swiper.esm.js';
import SwiperStyle from 'swiper/dist/css/swiper.min.css';

export class TimeLinbe extends React.Component {
  componentDidMount(){
    new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  render() {
    console.log(SwiperStyle);
    return (
      <div style={{...SwiperStyle}}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
            <div className="swiper-slide">Slide 10</div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
};

export default TimeLinbe;