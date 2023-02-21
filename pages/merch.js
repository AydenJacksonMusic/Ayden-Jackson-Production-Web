import swell from '../lib/swell';

export default function Products({ products }) {
  console.log(products)
  return (
    <div>
      <h1>Products</h1>
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

/fix mapping issue, products are showing up in console/