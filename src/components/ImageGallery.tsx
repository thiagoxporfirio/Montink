import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col items-center">
      <img src={mainImage} alt="Main Product" className="w-1/3 mb-4" />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-1/6 cursor-pointer"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
