import { FiShoppingBag } from 'react-icons/fi';

const CartBtn = ({ itemCount }) => {
  return (
    <button className='relative'>
      <FiShoppingBag size='25' />
      <span
        className='
          text-sm bg-blue-900 text-white
          flex items-center justify-center w-5 h-5 rounded-full
          absolute bottom-3.5 left-3
        '
      >
        {itemCount}
      </span>
    </button>
  );
};

export default CartBtn;
