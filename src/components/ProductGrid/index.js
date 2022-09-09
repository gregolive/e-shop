import Product from './ProductCard';

const ProductGrid = ({ title, subtitle, products, bgColor }) => {
  return (
    <section className={`${bgColor} product-section`}>
      <h2 className='text-4xl font-bold tracking-wide'>
        {title}
      </h2>
      <p className='text-xl text-zinc-500 text-center'>
        {subtitle}
      </p>
      
      <div className='product-grid'>
        {products.map((p) =>
          <Product product={p} key={p.name} />
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
