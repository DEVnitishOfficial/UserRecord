import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';

function App() {
  const [userData, setUserData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user', userData);
      alert('User details saved successfully!');
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${searchName}`);
      console.log('response',response)
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className="App">

      {/* User Form */}
    <UserForm userData={userData} onSubmit={handleSubmit} setUserData={setUserData} />

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
          <div className='flex flex-col items-center text-center'>
  <p className='mb-2 font-bold'>{userDetails.name}</p>
  <p className='mb-2 font-bold'>{userDetails.email}</p>
  <p className='mb-2 font-bold'>{userDetails.fatherName}</p>
</div>

        </div>
      )}
    </div>
  );
}

export default App;
