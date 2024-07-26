import React from 'react';
import iphone1 from '../assets/images/iwatchslider1.jpg';
import iphone2 from '../assets/images/iwatchslider2.jpg';
import iphone3 from '../assets/images/iwatchslider3.jpg';
import iphone4 from '../assets/images/iphone4.jpg';
import iphone5 from '../assets/images/iphone5.jpg';
import iphone6 from '../assets/images/iphone6.jpg';
import iphone7 from '../assets/images/iphone7.jpg';
import iphone8 from '../assets/images/iphone8.jpg';
import iphone9 from '../assets/images/iphone9.jpg';
import iphone10 from '../assets/images/iphone10.jpg';
import iphone11 from '../assets/images/iphone11.jpg';
import iphone12 from '../assets/images/iphone12.jpg';
import Card from '@mui/material/Card';
import BannerImg from "../assets/images/iwatchbg1.jpg"
import styled from 'styled-components';
import Nav from './Nav';
import Banner from './Banner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import "../sass/main.scss";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControl } from '@mui/material';
import SimpleImageSlider from "react-simple-image-slider";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ImageList, ImageListItem } from '@mui/material';
function Iwatches() {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,  // Show only 1 item on desktop
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,  // Show only 1 item on tablet
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,  // Show only 1 item on mobile
        slidesToSlide: 1,
    },
};

  const items = [
    { image: iphone1 },
    { image: iphone2 },
    { image: iphone3 },
  ];
  const ImgItems = [
    { image: iphone1, title: 'iPhone 1' },
    { image: iphone4, title: 'iPhone 2' },
    { image: iphone9, title: 'iPhone 3' },
  ];
  
  return (
    <>
      <div id="ipad">
        <Nav />
        <Banner
          title="Ready to Elevate Your Experience?"
          description="Visit iStore today and discover why iPad is the choice of professionals and enthusiasts alike. Experience the power and beauty of Apple's iPad lineup and unlock new possibilities in creativity, productivity, and innovation."
          backgroundImage={BannerImg}
        />
        <br />
        <h1 >Explore Our iPhone Collection</h1>
        <br />

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}           // Auto play enabled
          autoPlaySpeed={3000}      // Interval between slides (ms)
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"  // Custom transition for smoother animation
          transitionDuration={500}  // Duration of each transition (ms)
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          itemClass="carousel-item"
          partialVisible={false}
          renderButtonGroupOutside={true}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
            </div>
          ))}
        </Carousel>
        <br />
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {ImgItems.map((item) => (
        <ImageListItem key={item.image}>
          <img
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        <br />
      </div>


    </>
  );
}

export default Iwatches;
