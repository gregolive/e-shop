import { useState } from 'react';
import Slide from './Slide';
import img1 from '../../assets/img/hero1.jpg';
import img2 from '../../assets/img/hero2.jpg';

const slides = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    img: img1,
    imgAlt: 'runner',
    accentColor: 'bg-slate-300',
  },
  {
    title: 'Duis aute irure',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    img: img2,
    imgAlt: 'running shoes',
    accentColor: 'bg-blue-200',
  },
];

const HeroBanner = () => {
  const [page, setPage] = useState(0);

  return (
    <main className='bg-white w-full relative h-hero'>
      {
        {
          0: <Slide slide={slides[0]} />,
          1: <Slide slide={slides[1]} />,
        }[page]
      }
    </main>
  );
};

export default HeroBanner;
