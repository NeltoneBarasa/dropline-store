import React from 'react';
import { useRouter } from 'next/router';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">Product Detail for {id}</h1>
      <p>Product details will be displayed here.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage; 