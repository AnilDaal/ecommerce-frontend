import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../store';
import Loader from '../../utils/Loader';
import './auth.css';

const AdminLogin = () => {
  const { loginAdminLoading, loginAdminError } = useSelector(
    (state) => state.auth
  );

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(user))
      .unwrap()
      .then(() => navigate('/admin'))
      .catch((err) => console.log(err));
  };
  console.log(user);
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
                  {loginAdminError && <p>{loginAdminError.message}</p>}
                  <div class="field padding-bottom--24">
                    <button>{loginAdminLoading ? <Loader /> : 'Submit'}</button>
                  </div>
                </form>
                <p
                  style={{
                    backgroundColor: 'pink',
                    display: 'flex',
                    gap: '2rem',
                  }}
                >
                  don't have an account <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
