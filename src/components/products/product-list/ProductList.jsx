import { Link } from 'react-router-dom';
import { arr } from '../../../data/jsonTestData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store';
import './product-list.css';
import Footer from '../../footer/Footer';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const catArray = ['Mesh', 'Visitors', 'Restaurant', 'Student'];
const ProductList = () => {
  const { token } = useSelector((state) => state.auth);
  const [filterArr, setFilterArr] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (product) => {
    if (token) {
      dispatch(addToCart(product));
    }
    toast.info(`plz login first `, {
      position: 'top-right',
    });
  };

  const handleFilter = (f) => {
    const filteredArray = arr.filter((p) => {
      // console.log(p.Categories.split(' ').includes(f));
      return p.Categories.split(' ').includes(f);
    });

    setFilterArr(filteredArray);
  };
  const handleFilterChairs = () => {
    setFilterArr(arr);
  };
  useEffect(() => {
    setFilterArr(arr);
  }, []);
  return (
    <>
      <div className="product-list-container">
        {/* <div
          className="product-list-filter"
          style={{ position: 'sticky', left: 0, top: '100px' }}
        >
          <h2>Category</h2>
          <div className="filter-button">
            <p onClick={() => handleFilterChairs()}>All Chairs</p>
            <p onClick={() => handleFilter('Mesh')}>Mesh Chairs</p>
            <p onClick={() => handleFilter('Visitors')}>Visitors Chairs</p>
            <p onClick={() => handleFilter('Restaurant')}>Restaurant Chairs</p>
            <p onClick={() => handleFilter('Student')}>Student Chairs</p>
          </div>
        </div> */}
        {/* <ul class="product-list"> */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            {filterArr.map((item) => {
              return (
                <div class="flex flex-wrap -m-4">
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link class="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={item.Images}
                      />
                    </Link>
                    <div class="mt-4">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 class="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p class="mt-1">$16.00</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* </ul> */}
      </div>
    </>
  );
};

export default ProductList;

{
  /* <div className="card" key={item.ID}>
                <Link to={`/product/${item.ID}`}>
                  <img
                    src={item.Images}
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100px',
                      objectFit: 'contain',
                    }}
                  />
                </Link>
                <div className="container">
                  <h5 style={{ height: '40px' }}>{item.Name}</h5>
                  <p>&#8377;{item['Regular price']}</p>
                </div>

                <div className="btn-container">
                  <button
                    onClick={() => handleClick(item)}
                    className="btn-1 cart-btn"
                  >
                    Cart
                  </button>
                  <Link to={`/product/${item.ID}`}>
                    {' '}
                    <button className="btn-1 detail-btn">Details</button>
                  </Link>
                </div>
              </div> */
}
