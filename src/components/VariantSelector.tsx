import React from 'react';

interface Variant {
  id: string;
  name: string;
}

interface VariantSelectorProps {
  variants: {
    sizes: Variant[];
    colors: Variant[];
  };
  onVariantChange: (size: string, color: string) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ variants, onVariantChange }) => {
  const [selectedSize, setSelectedSize] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    onVariantChange(size, selectedColor);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onVariantChange(selectedSize, color);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Select Size:</h3>
        <div className="flex space-x-2">
          {variants.sizes.map((size) => (
            <button
              key={size.id}
              className={`px-4 py-2 border rounded ${selectedSize === size.name ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => handleSizeChange(size.name)}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Select Color:</h3>
        <div className="flex space-x-2">
          {variants.colors.map((color) => (
            <button
              key={color.id}
              className={`px-4 py-2 border rounded ${selectedColor === color.name ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => handleColorChange(color.name)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantSelector;
