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
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Nav from './Nav';

function Macbook() {

    const cardsData = [
        {
            image: MaccBook1,
            title: 'MacBook Air',
            description: 'MacBook Air offers unparalleled portability with its lightweight design, coupled with a stunning Retina display for vivid visuals. Its all-day battery life ensures productivity on the go, making it ideal for professionals and travelers alike.'
        },
        {
            image: MaccBook2,
            title: 'MacBook Pro',
            description: 'The MacBook Pro is Apples top-tier laptop, known for its powerful performance, stunning Retina display with True Tone technology, and sleek design. Its designed for professionals with demanding tasks, offering customizable configurations and long battery life to enhance productivity and creativity.'
        },
        {
            image: MaccBook3,
            title: 'MacBook Studio',
            description: 'The MacBook Studio is crafted for creative professionals seeking unparalleled performance and reliability. With its advanced hardware configurations and stunning Retina display, it delivers exceptional power for graphic design, video editing, and more.'
        },
        {
            image: MaccBook4,
            title: 'MacBook Air',
            description: 'MacBook Air offers unparalleled portability with its lightweight design, coupled with a stunning Retina display for vivid visuals. Its all-day battery life ensures productivity on the go, making it ideal for professionals and travelers alike.'
        },
        {
            image: MaccBook5,
            title: 'MacBook Pro',
            description: 'The MacBook Pro is Apples top-tier laptop, known for its powerful performance, stunning Retina display with True Tone technology, and sleek design. Its designed for professionals with demanding tasks, offering customizable configurations and long battery life to enhance productivity and creativity.'
        },
        {
            image: MaccBook6,
            title: 'MacBook Studio',
            description: 'The MacBook Studio is crafted for creative professionals seeking unparalleled performance and reliability. With its advanced hardware configurations and stunning Retina display, it delivers exceptional power for graphic design, video editing, and more.'
        },
        {
            image: MaccBook7,
            title: 'MacBook Air',
            description: 'MacBook Air offers unparalleled portability with its lightweight design, coupled with a stunning Retina display for vivid visuals. Its all-day battery life ensures productivity on the go, making it ideal for professionals and travelers alike.'
        },
        {
            image: MaccBook8,
            title: 'MacBook Pro',
            description: 'The MacBook Pro is Apples top-tier laptop, known for its powerful performance, stunning Retina display with True Tone technology, and sleek design. Its designed for professionals with demanding tasks, offering customizable configurations and long battery life to enhance productivity and creativity.'
        },
        {
            image: MaccBook9,
            title: 'MacBook Studio',
            description: 'The MacBook Studio is crafted for creative professionals seeking unparalleled performance and reliability. With its advanced hardware configurations and stunning Retina display, it delivers exceptional power for graphic design, video editing, and more.'
        },
        {
            image: MaccBook10,
            title: 'MacBook Air',
            description: 'MacBook Air offers unparalleled portability with its lightweight design, coupled with a stunning Retina display for vivid visuals. Its all-day battery life ensures productivity on the go, making it ideal for professionals and travelers alike.'
        },
        {
            image: MaccBook11,
            title: 'MacBook Pro',
            description: 'The MacBook Pro is Apples top-tier laptop, known for its powerful performance, stunning Retina display with True Tone technology, and sleek design. Its designed for professionals with demanding tasks, offering customizable configurations and long battery life to enhance productivity and creativity.'
        },
        {
            image: MaccBook12,
            title: 'MacBook Studio',
            description: 'The MacBook Studio is crafted for creative professionals seeking unparalleled performance and reliability. With its advanced hardware configurations and stunning Retina display, it delivers exceptional power for graphic design, video editing, and more.'
        },

        // Add more objects for each card as needed
    ];
    return (
        <>
            <div id="macbook">
            <Nav/>
                <div className="overlay">
                    <h1>Ready to Elevate Your Experience?</h1>
                    <p>Visit iStore today and discover why MacBook is the choice of professionals and enthusiasts alike. Experience the power and beauty of Apple's MacBook lineup and unlock new possibilities in creativity, productivity, and innovation.</p>
                </div>
                <br />
                <h1 >Explore Our MacBook Collection</h1>
                <br />
                <div className="image-grid">
                    {cardsData.map((card, index) => (
                        <Card key={index} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={card.image} // Use the current image from the card object
                                    alt={`MacBook ${index + 1}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Macbook;
