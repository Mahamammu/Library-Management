import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';


function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
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

    if (err.name === '' && err.email === '' && err.password === '') {
      axios
        .post('https://library-management-3.onrender.com/signup', values)
        .then((res) => {
          navigate('/login');
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
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          width: '25%'
        }}
      >
        <h2>Sign up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
            <input
              type='name'
              placeholder='Enter Name'
              name='name'
              onChange={handleInput}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </div>
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
              onChange={handleInput}
              name='password'
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <button
            type='submit'
            style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#28a745', border: 'none', color: '#ffffff' }}
          >
            Sign up
          </button>
          <p>You agree</p>
          <Link
            to='/login'
            style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#f8f9fa', border: '1px solid #ced4da', textAlign: 'center', textDecoration: 'none', color: '#212529' }}
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
