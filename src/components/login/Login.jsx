import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAction } from '@root/hooks/useAction';
import { useSelector } from 'react-redux';
import { Loader } from '../search/components/loader/Loader';
import './login.scss';

const Login = () => {
  const { authLoading, authError } = useSelector((state) => state.auth);
  const { setAuthError, loginRequestAction } = useAction();
  const [currentLogin, setCurrentLogin] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);

  const navigate = useNavigate();
  const fromPage = '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = { email: currentLogin, password: currentPassword };

    const result = await loginRequestAction(currentUser);

    if (!result.error) {
      navigate(fromPage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setCurrentLogin(value);
    } else if (name === 'pass') {
      setCurrentPassword(value);
    }

    if (currentLogin.length > 5 && currentPassword.length > 5) {
      setBtnStatus(false);
    } else {
      setBtnStatus(true);
    }
  };

  return (
    <>
      <div className="login__wrap">
        <form className="login__form" onSubmit={handleSubmit}>
          <label>
            Login:
            <input
              className="login__field"
              value={currentLogin}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter login"
            />
          </label>

          <label>
            Password:
            <input
              className="login__field"
              value={currentPassword}
              onChange={handleChange}
              type="password"
              name="pass"
              placeholder="Enter password"
            />
          </label>

          <button className="login__btn" type="submit" disabled={btnStatus}>
            Login
          </button>
          <p>
            or{' '}
            <Link className="login__link" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
      {authError && (
        <div className="message__wrap">
          <div className="message">
            <p>{authError}</p>
            <button
              className="message__btn"
              type="button"
              onClick={() => {
                setAuthError({ authError: null });
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      {authLoading && <Loader />}
    </>
  );
};

export { Login };
