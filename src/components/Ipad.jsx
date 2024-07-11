import React from 'react';
import MaccBook1 from '../assets/images/macbook1.jpg';
import MaccBook2 from '../assets/images/macbook2.jpg';
import MaccBook3 from '../assets/images/macbook3.jpg';
import MaccBook4 from '../assets/images/macbook4.jpg';
import MaccBook5 from '../assets/images/macbook5.jpg';
import MaccBook6 from '../assets/images/macbook6.jpg';
import MaccBook7 from '../assets/images/macbook7.jpg';
import MaccBook8 from '../assets/images/macbook8.jpg';
import MaccBook9 from '../assets/images/macbook9.jpg';
import MaccBook10 from '../assets/images/macbook10.jpg';
import MaccBook11 from '../assets/images/macbook11.jpg';
import MaccBook12 from '../assets/images/macbook12.jpg';
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
        { image: MaccBook1, title: 'Title 1', description: 'Description 1' },
        { image: MaccBook12, title: 'Title 2', description: 'Description 2' },
        { image: MaccBook10, title: 'Title 3', description: 'Description 3' },
        // Add more items as needed
    ];
    return (
        <>
            <div id="macbook">
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
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    itemClass="carousel-item"
                    partialVisible={false} // Ensures full width of items visible
                    renderButtonGroupOutside={true} // Renders navigation buttons outside the carousel
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
<br/>
<br/>
            </div>


        </>
    );
}

export default Ipad;
