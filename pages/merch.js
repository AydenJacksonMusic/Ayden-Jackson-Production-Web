import swell from '../lib/swell';

export default function Products({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const products = await swell.products.list();
  return {
    props: {
      products,
    },
  };
}