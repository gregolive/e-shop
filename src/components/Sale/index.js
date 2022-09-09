import ProductGrid from '../ProductGrid';
import runner from '../../assets/img/nike-runner.webp';
import runner2 from '../../assets/img/nike-runner2.webp';
import casual from '../../assets/img/nike-casual.webp';
import casual2 from '../../assets/img/nike-casual2.webp';
import tennis from '../../assets/img/nike-tennis.webp';
import tennis2 from '../../assets/img/nike-tennis2.webp';

const sampleProducts = [
  {
    name: 'Running Shoes',
    price: '150',
    salePrice: '120',
    img: runner,
    img2: runner2,
  },
  {
    name: 'Lifestyle Shoes',
    price: '120',
    salePrice: '80',
    img: casual,
    img2: casual2,
  },
  {
    name: 'Tennis Shoes',
    price: '210',
    salePrice: '175',
    img: tennis,
    img2: tennis2,
  },
];

const Sale = () => {
  return (
    <ProductGrid
      title='On Sale'
      subtitle='Check out our hottest deals of the week'
      products={sampleProducts}
      bgColor='bg-white'
    />
  );
};

export default Sale;
