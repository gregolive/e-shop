import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { name, price, salePrice, img, img2 } = product;
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <div className='flex flex-col items-center'>
      <a href='/' className='aspect-square overflow-hidden'>
        <img
          src={imgSrc}
          alt={name}
          onMouseEnter={() => setImgSrc(img2)}
          onMouseLeave={() => setImgSrc(img)}
          className='transition-all'
        />
      </a>

      <a href='/' className='text-lg font-medium hover:text-pink-600 transition-all duration-200 pt-4'>
        {name}
      </a>

      <p className='text-pink-600'>
        {(salePrice) ? (
          <>
            <span className='text-gray-500 line-through pr-2'>${price}</span>
            <span>${salePrice}</span>
          </>
        ) : (
          <span>${price}</span>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
