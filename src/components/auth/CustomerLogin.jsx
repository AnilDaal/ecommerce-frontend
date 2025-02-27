import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginCustomer } from '../../store';
import Loader from '../../utils/Loader';
import './auth.css';
const CustomerLogin = () => {
  const {
    token,

    loginLoading,
    loginError,
  } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(user));
  };
  console.log(token);
  return (
    <div class="login-root">
      <div
        class="box-root flex-flex flex-direction--column"
        style={{ minHeight: '100vh', flexGrow: '1' }}
      >
        <div
          class="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: '1', zIndex: '9' }}
        >
          {/* <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>Furniture Lelo</h1>
          </div> */}
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Sign in to your account</span>
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>

                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
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
                  {loginError && (
                    <p className="text-red-500">{loginError.message}</p>
                  )}
                  <div class="field padding-bottom--24">
                    <button>{loginLoading ? <Loader /> : 'Submit'}</button>
                  </div>
                </form>
                <p
                  style={{
                    display: 'flex',
                    gap: '2rem',
                  }}
                  className="text-blue-600 text-xl"
                >
                  don't have an account{' '}
                  <Link to="/customer-register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
