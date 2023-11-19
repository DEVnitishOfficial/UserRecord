import React from 'react'

const UserForm = ({ userData, onSubmit,setUserData, loading }) => {
  return (
//     <form onSubmit={onSubmit} className="mb-8">
//     {/* ... input fields for user details ... */}
//     <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700">Name:</label>
//     <input
//       type="text"
//       value={userData.name}
//       onChange={ (e) => setUserData({ ...userData, name: e.target.value })}
//       className="border-2 border-gray-300 px-4 py-2 w-64"
//       required
//     />
//     <label className="block text-sm font-medium text-gray-700">Email:</label>
//     <input
//       type="text"
//       value={userData.email}
//       onChange={ (e) => setUserData({ ...userData, email: e.target.value })}
//       className="border-2 border-gray-300 px-4 py-2 w-64"
//       required
//     />

//   </div>
//     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//       Submit
//     </button>
//   </form>

<div className="w-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-4 ">

<form  className="space-y-6" onSubmit={onSubmit}>
<h5 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
 Registration Form
 </h5>

<div className='flex space-x-32'>
   {/* Personal Information Section */}
   <div className="mb-6">
  <h6 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
    Personal Information
  </h6>

     {/* your name  */}
     <div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Your Name
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    required
    value={userData.name}
    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
  />
</div>

{/** email */}
<div className="mb-6">
  <label
    htmlFor="email"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Email
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="E-mail"
    required
    value={userData.email}
    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
  />
</div>

{/** date of birth */}
<div className="mb-6">
  <label
    htmlFor="dateOfBirth"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
   D.O.B
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="01/01/1999"
    value={userData.dateOfBirth}
    onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
  />
</div>
{/** Gender */}
<div className="mb-6">
  <label
    htmlFor="gender"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Gender
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="Male/female"
    value={userData.gender}
    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
  />
</div>


{/** Father name */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Father Name
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="jhon"
    value={userData.fatherName}
    onChange={(e) => setUserData({ ...userData, fatherName: e.target.value })}
  />
</div>

{/** Mother name */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Mother Name
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="Meera"
    value={userData.motherName}
    onChange={(e) => setUserData({ ...userData, motherName: e.target.value })}
  />
</div>
</div>

{/* Contact Information Section */}
<div className="mb-6">
  <h6 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
    Contact Information
  </h6>
  
{/** Mobile No. */}
<div className="mb-6">
  <label
    htmlFor="mobileno"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Mobile No.
  </label>
  <input
    type="Number"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    value={userData.mobileNo}
    onChange={(e) => setUserData({ ...userData, mobileNo: e.target.value })}
  />
</div>

{/** WhatsApp No. */}
<div className="mb-6">
  <label
    htmlFor="whatsAppNumber"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  WhatsApp No.
  </label>
  <input
    type="Number"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    value={userData.whatsAppNumber}
    onChange={(e) => setUserData({ ...userData, whatsAppNumber: e.target.value })}
  />
</div>

{/** Pan No. */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  PAN No.
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    value={userData.panNo}
    onChange={(e) => setUserData({ ...userData, panNo: e.target.value })}
  />
</div>

{/** Aadhar No. */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Aadhar No.
  </label>
  <input
    type="Number"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="1254-6521-3620"
    value={userData.aadharNo}
    onChange={(e) => setUserData({ ...userData, aadharNo: e.target.value })}
  />
</div>

{/** caste */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Caste 
  </label>
  <input
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    value={userData.caste}
    onChange={(e) => setUserData({ ...userData, caste: e.target.value })}
  />
</div>

{/** Address */}
<div className="mb-6">
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
  Address
  </label>
  <textarea
    type="text"
    id=""
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    placeholder="user name"
    value={userData.address}
    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
  />
</div>

</div>
</div>

 {/*  signUp button */}

 <button
  type="submit"
  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Submit
  {loading ? (
    <svg
      aria-hidden="true"
      role="status"
      className="inline w-4 h-4 mr-3 text-white animate-spin ml-2"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  ) : null}
</button>

 {/* get user details if already exist */}

 {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
  User already exist?{" "}
  <Link
    to="/getUser"
    className="text-blue-700 hover:underline dark:text-blue-500"
  >
    Find User Details
  </Link>
</div> */}

</form>

</div>





  )
}

export default UserForm