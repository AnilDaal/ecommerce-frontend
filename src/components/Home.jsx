import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, useGetAllProductsQuery } from '../store';
import Slider from './slider/Slider';

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  // const { items, error } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);
  // console.log(error);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error is: {error.error}</p>;
  return (
    <div className="container">
      <Slider />
      <div
        className=" mt-5"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
      >
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
