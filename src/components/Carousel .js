import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nav from './Nav';
import '../Styles/carousel.css'


export default function Carousel () {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        pauseOnHover: false,
        fade: true,
      };
  return (
    <div>
      <Nav/>
        <Slider {...settings}>
          <div>
            <img src="/images/banner2.jpg" alt="banner-alt"/>
          </div>
          <div>
            <img src="/images/banner3.jpg" alt="banner-alt"/>
          </div>
          <div>
            <img src="/images/RR_BlogImage_Sliders-1 (1).jpg" alt="banner-alt"/>
          </div>
         
        </Slider>
        
        
    </div>
  )
}
