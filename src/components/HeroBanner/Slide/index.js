const Slide = ({ slide, isActive }) => {
  const { title, description, img, imgAlt, accentColor } = slide;

  return (
    <div className={`${(isActive) ? 'block' : 'hidden'} h-full animate-fade`}>
      <div className={`${accentColor} banner-content`}>
        <h1 className='text-3xl md:text-4xl font-medium text-center lg:text-left drop-shadow-text lg:drop-shadow-none'>
          {title}
        </h1>
        <p className='text-lg md:text-xl text-center lg:text-left drop-shadow-text lg:drop-shadow-none'>
          {description}
        </p>
        <button
          className='btn btn-primary lg:self-start'
          type='button'
        >
          Shop now
        </button>
      </div>
      
      <div className='banner-container bg-stone-50 overflow-hidden'>
        <img src={img} alt={imgAlt} className='banner-img' />
      </div>
    </div>
  );
};

export default Slide;
