import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleFilterCat } from '../../store';
import './feature-category.css';

const FeatureCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(handleFilterCat(product.toLowerCase()));
    navigate('/product-list');
  };
  return (
    <>
      <h1 className="text-center text-4xl my-8">Featured Categories</h1>

      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '30px',
        }}
        className="container d-feature-cat"
      >
        <div className="d-feature-cat-div">
          <img
            style={{ flex: 1, height: '300px', width: '360px' }}
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="d-cat-content">
            <h1>Office Furniture</h1>
            <p>Available for quick shipping</p>
            <button onClick={() => handleClick('office')}>Show now</button>
          </div>
        </div>
        <div className="d-feature-cat-div">
          <img
            style={{ flex: 1, height: '300px', width: '360px' }}
            src="https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="d-cat-content">
            <h1>Resturant Furniture</h1>
            <p>Top picks for your desire</p>
            <button onClick={() => handleClick('table')}>Show now</button>
          </div>
        </div>
        <div className="d-feature-cat-div">
          <img
            style={{ flex: 1, height: '300px', width: '360px' }}
            src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="d-cat-content">
            <h1>Home Furniture</h1>
            <p>Top picks for your desire</p>
            <button onClick={() => handleClick('sofa')}>Show now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCategory;
