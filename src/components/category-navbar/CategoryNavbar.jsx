import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { handleFilterCat } from '../../store';
import './category-navbar.css';

const CategoryNavbar = ({ title, links }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (product) => {
    dispatch(handleFilterCat(product.toLowerCase()));
    navigate('/product-list');
  };
  return (
    <>
      <div className="dropdown">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="font-semibold hover:text-primary ">{title}</span>
          <span>
            {/* &#8964; */}
            <IoMdArrowDropdown />
          </span>
        </div>

        <div className="dropdown-content">
          {links?.map((item) => (
            <div onClick={() => handleClick(item)} key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNavbar;
