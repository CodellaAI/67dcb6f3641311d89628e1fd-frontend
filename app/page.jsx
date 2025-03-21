
"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    setLoading(true);
    setStatus('Sending data...');
    
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/data`, {
        message: 'Hello from frontend!',
        timestamp: new Date().toISOString()
      });
      
      setStatus(`Success! Data stored with ID: ${response.data.id}`);
    } catch (error) {
      console.error('Error sending data:', error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Simple Data Sender</h1>
        
        <button
          onClick={sendData}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Data to Database'}
        </button>
        
        {status && (
          <div className={`mt-4 p-3 rounded ${status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status}
          </div>
        )}
      </div>
    </main>
  );
}
