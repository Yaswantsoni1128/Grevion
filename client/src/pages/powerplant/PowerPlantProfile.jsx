import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PowerPlantProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Error: Authentication token not found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/getUserInfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('User Info:', response.data);
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error('Response error:', error.response.data);
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`);
        } else if (error.request) {
          console.error('Request error:', error.request);
          setError('Error: No response from server');
        } else {
          console.error('Error:', error.message);
          setError(`Error: ${error.message}`);
        }
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Power Plant Profile</h1>
      
      {loading ? (
        <p className="text-lg font-semibold text-gray-600">Loading user info...</p>
      ) : error ? (
        <p className="text-lg font-semibold text-red-600">{error}</p>
      ) : user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{user.name}</h2>
          <p className="text-md text-gray-700"><strong>Email:</strong> {user.email}</p>
          <p className="text-md text-gray-700"><strong>Role:</strong> {user.role}</p>
          <p className="text-md text-gray-700"><strong>Location:</strong> {user.location}</p>
          <p className="text-md text-gray-700"><strong>Registered On:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p className="text-lg font-semibold text-gray-600">User data not available.</p>
      )}
    </div>
  );
};

export default PowerPlantProfile;
