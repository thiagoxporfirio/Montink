import React from 'react';
import { productData } from '../data/productData';

const MainImage: React.FC = () => {
  let mainImageSrc: string;
  try {
    mainImageSrc = require(`../assets/${productData.images.main}`);
  } catch {
    mainImageSrc = '';
  }

  return (
    <div className="w-full mb-8">
      <img
        src={mainImageSrc}
        alt="Imagem Principal"
        className="w-full object-cover rounded shadow"
        style={{ height: '800px', maxHeight: '80vh' }}
      />
    </div>
  );
};

export default MainImage;
