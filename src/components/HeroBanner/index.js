import { useState } from 'react';
import Slide from './Slide';
import hero1 from '../../assets/img/hero1.jpg';
import hero2 from '../../assets/img/hero2.jpg';
import SlideBtns from './SlideBtns';

const slides = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: hero1,
    imgAlt: 'runner',
    accentColor: 'lg:bg-slate-100',
  },
  {
    title: 'Duis aute irure',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    img: hero2,
    imgAlt: 'running shoes',
    accentColor: 'lg:bg-sky-50',
  },
];

const HeroBanner = () => {
  const [page, setPage] = useState(0);

  return (
    <section className='hero'>
      <Slide slide={slides[0]} isActive={(page === 0)} />
      <Slide slide={slides[1]} isActive={(page === 1)} />

      <SlideBtns page={page} setPage={setPage} pageCount={slides.length - 1} />
    </section>
  );
};

export default HeroBanner;
