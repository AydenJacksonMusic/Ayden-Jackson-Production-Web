import { useEffect, useState } from 'react';

export default function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const productData = await response.json();
      setProduct(productData);
    };
    getProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
console.log(product)
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { productId } = params;
  return {
    props: {
      productId,
    },
  };
}