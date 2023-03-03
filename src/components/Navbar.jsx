import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../store';

function NavbarComponent() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">E-comm Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/cart">cart</Link>

            <span className="cart-total-quantity">{cartTotalQuantity}</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginRight: '2rem',
        }}
      >
        {!token && (
          <div>
            <Link to="/login" style={{ marginRight: '1rem' }}>
              Login
            </Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        {token && (
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
