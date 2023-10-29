import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Login.css';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      const data = {
        email: email,
        password: password,
      };
      const postLogin = async () => {
        try {
          const res = await axios.post('http://localhost:3000/log-in', data, {
            withCredentials: true,
          });
          console.log(res);
        } catch (err) {
          setError(`Incorrect e-mail address or password entered`);
        }
      };
      postLogin();
    }
  };

  const handlerEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlerPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="login-form">
      <p>{error}</p>
      <form className="login-form" onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email-login"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password-login"
          value={password}
          onChange={(e) => {
            handlerPassword(e);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
