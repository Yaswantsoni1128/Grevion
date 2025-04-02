import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);  // Ensure it's an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Error: Authentication token not found');
        setLoading(false);
        return;
      }
    
      try {
        const response = await axios.get('http://localhost:8000/api/v1/powerplant/getAllOrders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log('Response Data:', response.data); // Log the response data
    
        // Access orders from response.data.orders and check if it's an array
        if (Array.isArray(response.data.orders)) {
          setOrders(response.data.orders); // Set the orders if valid array
        } else {
          setOrders([]); // No orders found, set empty array
        }
    
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error('Response error data:', error.response.data);
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`);
        } else if (error.request) {
          console.error('Request error:', error.request);
          setError('Error: No response from server');
        } else {
          console.error('Error', error.message);
          setError(`Error: ${error.message}`);
        }
      }
    };
    
    fetchOrders();    
  }, []);

  return (
    <div>
      <h1>My Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order, index) => (
              <li key={index}>
                Order ID: {order._id} - Status: {order.status}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default MyOrdersPage;
