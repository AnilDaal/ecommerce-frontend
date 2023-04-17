import RelatedProduct from '../../related-product/RelatedProduct';

const TopProducts = () => {
  return (
    <div class="container pb-16 mx-auto">
      <h1 className="text-center text-4xl my-8">Top New Arrival</h1>

      <RelatedProduct value={5} />
    </div>
  );
};

export default TopProducts;
