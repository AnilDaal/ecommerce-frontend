import { Link } from 'react-router-dom';
import { arr } from '../../../data/jsonTestData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store';
import './product-list.css';
import Footer from '../../footer/Footer';
import { useEffect, useState } from 'react';

const catArray = ['Mesh', 'Visitors', 'Restaurant', 'Student'];
const ProductList = () => {
  const [filterArr, setFilterArr] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(addToCart(product));
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
        <div
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
        </div>
        <ul class="product-list">
          {filterArr.map((item) => {
            return (
              <div className="card" key={item.ID}>
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
              </div>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
