// Overlay.js
import React from 'react';

function Banner({ title, description, backgroundImage }) {
    const overlayStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',  // Ensures the background image covers the entire area
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
        height: '300px',  // Set a fixed height for the overlay container
        position: 'relative',  // Ensure the overlay content stays within the container
      };
    
      const contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    
      const titleStyle = {
        fontSize: '2.5rem',
        marginBottom: '20px',
      };
    
      const descriptionStyle = {
        fontSize: '1.2rem',
      };
  return (
    <div className="overlay" style={overlayStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
}

export default Banner;
