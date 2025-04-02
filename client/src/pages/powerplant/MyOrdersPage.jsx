import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../../components/OrderCard';
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
    
        console.log('Response Data:', response.data); 
        if (Array.isArray(response.data.orders)) {
          setOrders(response.data.orders); 
        } else {
          setOrders([]);
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
    <div className='flex flex-col gap-10 mt-10 items-center'>
      <h1 className='text-green-950 text-4xl font-bold'>My Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "35px" }} >
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order, index) => (
              <div className='flex transition-transform transform hover:scale-105 '>
              <div
              className='px-2  font-semibold bg-green-950 text-lime-300 uppercase'
              style={{
                clipPath: "polygon(0 0, 38% 0, 26.5% 11%, 0 11%)",
                border: "1px solid #ddd",
                borderRadius: "10px",
                marginBottom: "15px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                width: "300px",
              }}
              > {order.name}</div>
              <OrderCard key={index} order={order}  />
              </div>
              
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
