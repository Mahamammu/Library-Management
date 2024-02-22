import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login({ isAdmin }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const err = Validation(values);
    setErrors(err);

    if (isAdmin && values.email === 'admin@gmail.com' && values.password === 'adminA123') {
      navigate('/admin-page');
    } else if (err.email === '' && err.password === '') {
      axios
        .post('https://library-management-3.onrender.com/login', values)
        .then((res) => {
          if (res.data === 'Success') {
            navigate('/home');
          } else {
            alert('No record existed');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          width: '25%',
        }}
      >
        <h2>{isAdmin ? 'Admin Login' : 'Sign in'}</h2>
        <form action='' onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <button type='submit' style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#28a745', border: 'none', color: '#ffffff' }}>
            {isAdmin ? 'Log in as Admin' : 'Log in'}
          </button>
          {isAdmin ? null : (
            <>
              <p>You agree</p>
              <Link
                to='/signup'
                style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#f8f9fa', border: '1px solid #ced4da', textAlign: 'center', textDecoration: 'none', color: '#212529' }}
              >
                Create account
              </Link>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

