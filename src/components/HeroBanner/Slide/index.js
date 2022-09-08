const Slide = ({ slide }) => {
  const { title, description, img, imgAlt, accentColor } = slide;

  return (
    <>
      <div className={`${accentColor} h-5/6 w-1/2 p-12 flex justify-center flex-col gap-3`}>
        <h1 className='text-4xl font-medium'>
          {title}
        </h1>
        <p className='text-xl'>
          {description}
        </p>
        <button
          className='btn btn-primary self-start'
          type='button'
        >
          Shop now
        </button>
      </div>
      
      <div className='banner bg-stone-50 overflow-hidden'>
        <img src={img} alt={imgAlt} className='banner-img' />
      </div>
    </>
  );
};

export default Slide;
