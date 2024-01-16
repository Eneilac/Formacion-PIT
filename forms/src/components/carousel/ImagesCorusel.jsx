import React from 'react';

const ImagesCarousel = ({ text, imageUrl }) => {
  return (
    <div style={{ textAlign: 'center' , borderRadius: '12px' } }>
      <img
        src={imageUrl}
        alt="Carousel Example"
        style={{ maxWidth: 'fit-content', height: '435px', margin: 'auto', borderRadius: '12px', objectFit:'cover'}}
      />
      <p style={{ marginTop: '0px' }}>{text}</p>
    </div>
  );
};

export default ImagesCarousel;
