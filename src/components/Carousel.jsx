import { useState } from 'react';

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="text-center mb-3">
        <img src={images[currentIndex]} alt="Carousel" />
      </div>
      <div className="text-center">
        <button className="btn btn-primary me-2" onClick={handleLeftClick}>
          Left
        </button>
        <button className="btn btn-primary" onClick={handleRightClick}>
          Right
        </button>
      </div>
    </div>
  );
};
