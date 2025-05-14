import React from 'react';
import ImageGallery from './components/ImageGallery';
import ProductTitle from './components/ProductTitle';
import Price from './components/Price';
import VariantSelector from './components/VariantSelector';
import DeliveryChecker from './components/DeliveryChecker';
import { productData } from './data/productData';

const App: React.FC = () => {
  const variantSizes = productData.variants.sizes.map((size: string, idx: number) => ({
    id: String(idx),
    name: size,
  }));
  const variantColors = productData.variants.colors.map((color: string, idx: number) => ({
    id: String(idx),
    name: color,
  }));

  const handleVariantChange = (size: string, color: string) => {};

  return (
    <div className="container mx-auto p-4">
      <ImageGallery images={productData.images.thumbnails} />
      <ProductTitle title={productData.title} />
      <Price price={productData.price} />
      <VariantSelector
        variants={{ sizes: variantSizes, colors: variantColors }}
        onVariantChange={handleVariantChange}
      />
      <DeliveryChecker />
    </div>
  );
};

export default App;
