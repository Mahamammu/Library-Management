// UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // Fetch user profile data from the backend
        axios.get('https://library-management-3.onrender.com/profile')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send updated user profile data to the backend for update
        axios.post('https://library-management-3.onrender.com/profile/update', userData)
            .then(response => {
                console.log('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                <label>Email:</label>
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} disabled />
                <label>Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default UserProfile;
