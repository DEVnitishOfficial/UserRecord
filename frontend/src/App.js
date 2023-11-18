import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fatherName: '',
    motherName: '',
    dob: '',
    mobileNo: '',
    whatsappNo: '',
    panNo: '',
    aadharNo: '',
    caste: '',
  });

  const [searchName, setSearchName] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user', formData);
      alert('User details saved successfully!');
      setFormData({
        name: '',
        email: '',
        fatherName: '',
        motherName: '',
        dob: '',
        mobileNo: '',
        whatsappNo: '',
        panNo: '',
        aadharNo: '',
        caste: '',
      });
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${searchName}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-4xl font-bold mb-4">User Form</h1>

      {/* User Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        {/* ... input fields for user details ... */}
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 px-4 py-2 w-64"
          required
        />
      </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {/* Search User by Name */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name:</label>
        <input
          type="text"
          name="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border-2 border-gray-300 px-4 py-2 w-64"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
          Search
        </button>
      </div>

      {/* Display User Details */}
      {userDetails && (
        <div>
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          {/* ... display user details ... */}
          {userDetails.name}
        </div>
      )}
    </div>
  );
}

export default App;
