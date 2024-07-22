import React from 'react';
import ipad1 from '../assets/images/ipad1.jpg';
import ipad2 from '../assets/images/ipad2.jpg';
import ipad3 from '../assets/images/ipad3.jpg';
import ipad4 from '../assets/images/ipad4.jpg';
import ipad5 from '../assets/images/ipad5.jpg';
import ipad6 from '../assets/images/ipad6.jpg';
import ipad7 from '../assets/images/ipad7.jpg';
import ipad8 from '../assets/images/ipad8.jpg';
import ipad9 from '../assets/images/ipad9.jpg';
import ipad10 from '../assets/images/ipad10.jpg';
import ipad11 from '../assets/images/ipad11.jpg';
// import ipad12 from '../assets/images/ipad12.jpg';
import Card from '@mui/material/Card';
import BannerImg from "../assets/images/bg-ipad.jpg"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Nav from './Nav';
import Banner from './Banner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};
function Ipad() {
    const items = [
       { image: ipad1, title: 'iPad Pro 12.9"', description: 'The ultimate iPad experience with unparalleled performance.' },
    { image: ipad7, title: 'iPad Air', description: 'Powerful and versatile, perfect for both work and play.' },
    { image: ipad10, title: 'iPad Mini', description: 'Compact yet mighty, designed for portability and convenience.' },
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
                <h1 >Explore Our iPad Collection</h1>
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
                            <div className="carousel-item-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <br />
                <br />
            </div>


        </>
    );
}

export default Ipad;
