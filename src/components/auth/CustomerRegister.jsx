import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../store';
import Loader from '../../utils/Loader';
import './auth.css';

const CustomerRegister = () => {
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
    number: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
  };
  // console.log(user);
  return (
    <div className="login-root" style={{ backgroundColor: 'yellowgreen' }}>
      <div
        className="box-root flex-flex flex-direction--column"
        style={{ minHeight: '100vh', flexGrow: '1' }}
      >
        <div
          className="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: '1', zIndex: '9' }}
        >
          {/* <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>Furniture Lelo</h1>
          </div> */}
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">
                  Register to your account
                </span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="number">Number</label>
                    <input
                      id="number"
                      value={user.number}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          number: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                  {registerError && <p>{registerError.message}</p>}
                  <div className="field padding-bottom--24">
                    <button>{registerLoading ? <Loader /> : 'Submit'}</button>
                  </div>
                </form>
                <p
                  style={{
                    backgroundColor: 'pink',
                    display: 'flex',
                    gap: '2rem',
                  }}
                >
                  already have an account <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegister;
