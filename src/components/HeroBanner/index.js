import { useState } from 'react';
import Slide from './Slide';
import img1 from '../../assets/img/hero1.jpg';
import img2 from '../../assets/img/hero2.jpg';
import SlideBtns from './SlideBtns';

const slides = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: img1,
    imgAlt: 'runner',
    accentColor: 'bg-orange-50',
  },
  {
    title: 'Duis aute irure',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    img: img2,
    imgAlt: 'running shoes',
    accentColor: 'bg-rose-50',
  },
];

const HeroBanner = () => {
  const [page, setPage] = useState(0);

  return (
    <main className='bg-white w-full relative h-hero'>
      <Slide slide={slides[0]} isActive={(page === 0)} />
      <Slide slide={slides[1]} isActive={(page === 1)} />

      <SlideBtns page={page} setPage={setPage} pageCount={slides.length - 1} />
    </main>
  );
};

export default HeroBanner;
