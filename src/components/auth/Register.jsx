import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store';
import Loader from '../../utils/Loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const {
    token,
    name,
    email,
    _id,
    registerLoading,
    registerError,
    loginLoading,
    loginError,
  } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <Form onSubmit={handleSubmit} className="container e-form">
      <Form.Group className="mb-3 ">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full name"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {registerError && (
          <p style={{ color: 'red' }}>{registerError.message}</p>
        )}

        <Button variant="primary" type="submit" className="mt-3">
          {registerLoading ? <Loader /> : 'Submit'}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Register;
