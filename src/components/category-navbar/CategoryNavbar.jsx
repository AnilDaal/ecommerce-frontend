import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import './category-navbar.css';
const CategoryNavbar = ({ title, links }) => {
  const [show, setShow] = useState(false);
  console.log(links);
  return (
    <>
      <div className="dropdown">
        <div
          onClick={() => setShow((prev) => !prev)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <span className="font-semibold hover:text-primary ">{title}</span>
          <span>
            {/* &#8964; */}
            <IoMdArrowDropdown />
          </span>
        </div>

        <div className="dropdown-content">
          {links?.map((item) => (
            <Link to="/product-list" key={item}>
              <p>{item}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNavbar;
