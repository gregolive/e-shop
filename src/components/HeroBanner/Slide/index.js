const Slide = ({ slide }) => {
  const { title, description, img, imgAlt, accentColor } = slide

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
      
      <div className='bg-stone-50 pt-5 pl-5 overflow-hidden absolute bottom-0 right-0 h-11/12 w-3/5'>
        <img src={img} alt={imgAlt} className='banner-img' />
      </div>
    </>
  );
};

export default Slide;
