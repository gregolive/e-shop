import logo from '../../../assets/img/logo.png';

const Logo = () => {
  return (
    <a href='/'>
      <img 
        src={logo} 
        alt='logo'
        className='h-20'
      />
    </a>
  );
};

export default Logo;
