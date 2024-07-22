import React from 'react';
import iphone1 from '../assets/images/iphone1.jpg';
import iphone2 from '../assets/images/iphone2.jpg';
import iphone3 from '../assets/images/iphone3.jpg';
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
import BannerImg from "../assets/images/iphonebg.jpg"
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
const images = [
  { id: 1, src: iphone1, title: 'iPad Pro 12.9"', description: 'The ultimate iPad experience with unparalleled performance.', rating: 4.5, stock: 20, price: 999.99 },
  { id: 2, src: iphone2, title: 'iPad Air', description: 'Powerful and versatile, perfect for both work and play.', rating: 4.3, stock: 15, price: 799.99 },
  { id: 3, src: iphone3, title: 'iPad Mini', description: 'Compact yet mighty, designed for portability and convenience.', rating: 4.0, stock: 10, price: 599.99 },
  { id: 4, src: iphone4, title: 'iPad Pro 12.9"', description: 'The ultimate iPad experience with unparalleled performance.', rating: 4.7, stock: 20, price: 999.99 },
  { id: 5, src: iphone5, title: 'iPad Air', description: 'Powerful and versatile, perfect for both work and play.', rating: 4.2, stock: 15, price: 799.99 },
  { id: 6, src: iphone6, title: 'iPad Mini', description: 'Compact yet mighty, designed for portability and convenience.', rating: 4.0, stock: 10, price: 599.99 },
  { id: 7, src: iphone7, title: 'iPad Pro 12.9"', description: 'The ultimate iPad experience with unparalleled performance.', rating: 4.1, stock: 20, price: 999.99 },
  { id: 8, src: iphone8, title: 'iPad Air', description: 'Powerful and versatile, perfect for both work and play.', rating: 4.9, stock: 15, price: 799.99 },
  { id: 9, src: iphone9, title: 'iPad Mini', description: 'Compact yet mighty, designed for portability and convenience.', rating: 3.9, stock: 10, price: 599.99 },
  { id: 10, src: iphone10, title: 'iPad Pro 12.9"', description: 'The ultimate iPad experience with unparalleled performance.', rating: 4.5, stock: 20, price: 999.99 },
  { id: 11, src: iphone11, title: 'iPad Air', description: 'Powerful and versatile, perfect for both work and play.', rating: 4.0, stock: 15, price: 799.99 },
  { id: 12, src: iphone12, title: 'iPad Mini', description: 'Compact yet mighty, designed for portability and convenience.', rating: 1.0, stock: 10, price: 599.99 },
];

function Iphone() {
  const [search, setSearch] = useState('');
  const [showClearIcon, setShowClearIcon] = useState('none');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowClearIcon(value ? 'block' : 'none');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearch('');
    setShowClearIcon('none');
  };

  const searchProduct = images.filter((product) =>
    Object.keys(product).some((key) =>
      product[key].toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const Truncate = (string, number) => {
    if (!string) return null;
    if (string.length <= number) return string;
    return string.slice(0, number) + '...';
  };


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

        <section className="product">
          <div className="container">
            <div >
              <TextField
                size="small"
                variant="outlined"
                value={search}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: showClearIcon, cursor: 'pointer',marginBottom:22 }}
                      onClick={handleClick}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="grid">
              {searchProduct.length > 0 ? (
                searchProduct.map((product) => (
                  <div className="card" key={product.id}>
                    <img
                      className="card-image"
                      src={product.src}
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        title={product.title.length >= 50 ? product.title : null}
                      >
                        {Truncate(product.title, 55)}
                      </h5>
                      <p className="card-description">
                        {Truncate(product.description, 55)}
                      </p>
                      <p className="card-price">${product.price}</p>
                      <div className="card-detail">
                        <StarRatings
                          rating={product.rating}
                          starDimension="16px"
                          starSpacing="1px"
                          starRatedColor="black"
                        />
                        <span>Stock: {product.stock}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">No items match your search criteria.</div>
              )}
            </div>
          </div>
        </section>
        <br />
        <br />
      </div>


    </>
  );
}

export default Iphone;
