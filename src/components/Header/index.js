import Logo from './Logo';
import CartBtn from './CartBtn';

const Header = () => {
  return (
    <div className='header'>
      <Logo />

      <div className='flex gap-8'>
        <a href='/' className='header-link'>Home</a>
        <a href='/shop' className='header-link'>Shop</a>
        <a href='/events' className='header-link'>Events</a>
        <a href='/contact' className='header-link'>Contact</a>
      </div>

      <CartBtn itemCount={3} />
    </div>
  );
};

export default Header;
