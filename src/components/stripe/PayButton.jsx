import axios from 'axios';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import jwtDecode from 'jwt-decode';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const PayButton = ({ cartItems }) => {
  const { token } = useSelector((state) => state.auth);
  const { _id } = jwtDecode(token);

  const handleClick = async () => {
    instance
      .post('/stripe/create-checkout-session', {
        cartItems,
        useId: _id,
      })
      .then((res) => {
        // if (res.data.url) {
        //   window.location.href = res.data.url;
        // }
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <Button onClick={handleClick} variant="info">
        Check Out
      </Button>
    </>
  );
};

export default PayButton;
