import React from 'react';

const ImagesCarousel = ({ text, imageUrl }) => {
  return (
    <div style={{ textAlign: 'center', borderRadius: '10px' }}>
      <img
        src={imageUrl}
        alt="Carousel Example"
        style={{ maxWidth: 'fit-content', maxHeight: '450px', margin: 'auto', borderRadius: '10px' }}
      />
      <p style={{ marginTop: '0px' }}>{text}</p>
    </div>
  );
};

export default ImagesCarousel;
