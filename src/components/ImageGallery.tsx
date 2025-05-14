import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [imgError, setImgError] = useState(false);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
    setImgError(false);
  };

  return (
    <div className="flex flex-col items-center">
      {imgError ? (
        <div className="w-[35vw] max-w-md mb-4 flex items-center justify-center bg-gray-100 rounded shadow aspect-square">
          <span className="text-gray-500">Imagem não encontrada</span>
        </div>
      ) : (
        <img
          src={mainImage}
          alt="Main Product"
          className="w-[35vw] max-w-md mb-4 object-contain rounded shadow"
          style={{ aspectRatio: '1/1' }}
          onError={() => setImgError(true)}
        />
      )}
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover cursor-pointer rounded border transition-all ${
              mainImage === image ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'
            }`}
            onClick={() => handleThumbnailClick(image)}
            onError={(e) => {
              // @ts-ignore
              // e.target.src = require('../assets/placeholder.png');
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
