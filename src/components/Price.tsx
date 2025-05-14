import React from 'react';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <div className="text-xl font-bold text-gray-800">R$ {price.toFixed(2).replace('.', ',')}</div>
  );
};

export default Price;
