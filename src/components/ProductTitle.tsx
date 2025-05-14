import React from 'react';

interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
  return <h1 className="text-2xl font-bold mb-4">{title}</h1>;
};

export default ProductTitle;
