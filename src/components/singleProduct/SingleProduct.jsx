import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './singlepage.css';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const imgArray = [
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/e15396c2-a5a9-4632-af45-53f3fd4876fc/force-1-lv8-2-younger-shoes-TlkrLd.png',
  },
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/599babb4-1dfe-4b90-be4d-e4f27b44e88c/air-force-1-older-shoes-lW51vL.png',
  },
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/c6dc80f9-0474-4201-9c31-7e76db39f7d6/air-jordan-1-low-older-shoes-xLzJc6.png',
  },
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/3ae4de6f-37f5-4c40-92a2-28ed31dbe8d1/dunk-high-older-shoes-5g3xvG.png',
  },
  {
    url: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/3ae4de6f-37f5-4c40-92a2-28ed31dbe8d1/dunk-high-older-shoes-5g3xvG.png',
  },
];

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instance.get(`/products/${id}`);
      console.log(data);
      setProduct(data);
      setImageUrl(data.image);
    };
    fetchData();
  }, []);

  const handleImageChange = (url) => {
    setImageUrl(url);
  };

  if (!product) return <p>Loading....</p>;
  return (
    <div className="single-page">
      <div className="single-left">
        <div className="single-left-imageArray">
          {imgArray.map((item) => (
            <img
              src={item.url}
              alt=""
              onClick={() => handleImageChange(item.url)}
            />
          ))}
        </div>
        <img src={imageUrl} alt="" />
      </div>
      <div className="single-right">
        <button>
          <Link to="/">Back To All Products</Link>
        </button>
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
