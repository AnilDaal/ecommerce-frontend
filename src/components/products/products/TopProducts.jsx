import React from 'react';
import RelatedProduct from '../../related-product/RelatedProduct';

const TopProducts = () => {
  return (
    <div class="container pb-16 mx-auto">
      <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>

      <RelatedProduct value={5} />
    </div>
  );
};

export default TopProducts;
