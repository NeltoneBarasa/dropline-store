import React from 'react';
import withAuth from '../components/withAuth';

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <p>Product listings will be displayed here.</p>
    </div>
  );
};

export default withAuth(ProductsPage, 'admin'); 