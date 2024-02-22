import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/signup');
  };

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <div
      style={{
        backgroundImage: `url('your-background-image-url')`, // Set your background image URL here
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
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Set a semi-transparent white background for content
          padding: '20px',
          borderRadius: '8px',
          width: '25%',
          textAlign: 'center',
        }}
      >
        <h2>Welcome</h2>
        <button
          style={{
            backgroundColor: '#28a745',
            width: '100%',
            borderRadius: '0',
            marginBottom: '10px',
          }}
          onClick={handleUserClick}
        >
          User
        </button>
        <button
          style={{
            backgroundColor: '#dc3545',
            width: '100%',
            borderRadius: '0',
          }}
          onClick={handleAdminClick}
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default Welcome;

