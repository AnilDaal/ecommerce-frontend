import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerSeller } from '../../store/thunks/auth';
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';

const SellerRegister = () => {
  const { registerSellerLoading, registerSellerError } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    address: '',
    pancard: '',
    confirmPassword: '',
    adharcard: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerSeller(user))
      .unwrap()
      .then(() => navigate('/dummy-seller'))
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-root">
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
                  Register to your <span className="text-pink-900">Seller</span>{' '}
                  account
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
                    <label htmlFor="adress">Address</label>
                    <input
                      id="adress"
                      value={user.address}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="field padding-bottom--24">
                    <label htmlFor="pancard">Pan Card</label>
                    <input
                      id="pancard"
                      value={user.pancard}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          pancard: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="field padding-bottom--24">
                    <label htmlFor="adharcard">Adhar Card</label>
                    <input
                      id="adharcard"
                      value={user.adharcard}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          adharcard: e.target.value,
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

                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={user.confirmPassword}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {registerSellerError && <p>{registerSellerError.message}</p>}
                  <div className="field padding-bottom--24">
                    <button>
                      {registerSellerLoading ? <Loader /> : 'Submit'}
                    </button>
                  </div>
                </form>
                <p
                  style={{
                    display: 'flex',
                    gap: '2rem',
                  }}
                >
                  already have an account <Link to="/seller-login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
