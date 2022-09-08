import { v4 as uuidv4 } from 'uuid';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

const ArrowBtn = ({ icon, page, setPage, pageCount }) => {
  const handleClick = () => {
    if (page + 1 > pageCount) {
      setPage(0);
      return;
    }
    setPage(page + 1);
  };

  return (
    <button
      className='text-gray-100 hover:bg-black/60 py-3 rounded transition-all duration-300'
      type='button'
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

const DotBtn = ({ page, setPage, dot }) => {
  const handleClick = () => (dot !== page) && setPage(dot);

  return (
    <button
      type='button'
      onClick={handleClick}
    >
      <span className={(page === dot) ? 'slider-dot active' : 'slider-dot'}></span>
    </button>
  );
};

const SlideBtns = ({ page, setPage, pageCount }) => {
  return (
    <>
      <div className='flex items-center justify-center gap-2 absolute bottom-0 left-0 h-1/6 w-2/5'>
        {[...Array(pageCount + 1)].map((n, i) =>
          <DotBtn
            page={page}
            setPage={setPage}
            dot={i}
            key={uuidv4()}
          />
        )}
      </div>

      <div className='banner flex justify-between items-center'>
        <ArrowBtn
          icon={<BsCaretLeftFill size='30' />}
          page={page}
          setPage={setPage}
          pageCount={pageCount}
        />
        <ArrowBtn
          icon={<BsCaretRightFill size='30' />}
          page={page}
          setPage={setPage}
          pageCount={pageCount}
        />
      </div>
    </>
  );
};

export default SlideBtns;
