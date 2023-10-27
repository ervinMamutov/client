import { useState } from 'react';
import axios from 'axios';
import './Register.css';
import PropTypes from 'prop-types';

import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import matchPasswords from '../utils/matchPasswords';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);
    if (isValidEmail) {
      setError('');
    } else {
      setError('Email is not valid');
    }
    const isValidPassword = validatePassword(password);
    if (isValidPassword) {
      setError('');
    } else {
      setError('Password is not valid');
    }
    const isMatch = matchPasswords(password, rePassword);
    if (isMatch) {
      setError('');
    } else {
      setError('Passwords has not match');
    }

    if (isValidEmail && isValidPassword && isMatch) {
      const data = {
        email: email,
        password: password,
        rePassword: rePassword,
      };
      const registerData = async () => {
        const res = await axios.post('http://localhost:3000/register', data);
        console.log(res);
      };

      registerData();
    } else {
      setError('Please fill in the field correctly');
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
  const handlerRePassword = (e) => {
    const value = e.target.value;
    setRePassword(value);
  };

  return (
    <div className="registration-form">
      <p>{error}</p>
      <form onSubmit={(e) => handlerSubmit(e)} className="registration">
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => handlerPassword(e)}
        />
        <label htmlFor="rePassword">Confirm Password</label>
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          value={rePassword}
          onChange={(e) => handlerRePassword(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
