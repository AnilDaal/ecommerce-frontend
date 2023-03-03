import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../store';

const ProductCard = ({ item }) => {
  const { name, desc, price, image, id } = item;
  const cartData = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // navigate('/cart');
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/${id}`}>
        <Card.Img
          variant="top"
          src={image}
          height={200}
          width={200}
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart(item)}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
