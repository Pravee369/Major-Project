// import React from 'react'
// import { useState} from 'react'
// import {useForm} from 'react-hook-form'
// import {useNavigate} from 'react-router-dom'
// import './Register.css'
// import axios from "axios"

// function Register() {
 
// let [error,setError] =useState("");

// let { register,handleSubmit,formState: { errors }, }=useForm();   


// const navigate=useNavigate();

// let addNewUser =(newUser)=>
// {
//   console.log(newUser);
//   let fd=new FormData();
//   console.log(fd.user)
//   fd.append("user",JSON.stringify(newUser))
//   console.log(fd)
  
//   //console.log(fd.user);
//   axios.post("http://localhost:3000/user-api/register-user",fd)
//   .then((response)=>
//   {
//     if(response.status===201)
//     {
//       console.log("navigated to login page");
//       navigate ("/login");
//     }
//     if(response.status!==201)
//     {
//      setError(response.data.message);
//     }
//   })
//   .catch((err) => {
//     console.log("err in user signup",err)
//     //the client was given an error response (5xx,4xx)
//     if (err.response) {
//       setError(err.message);
//     }
//     //the client never received a response
//     else if (err.request) {
//       setError(err.message);
//     }
//     //for other error
//     else {
//       setError(err.message);
//     }
//   });
// }


//  return (

// <div className="container mt-1 row">

//       <h1 className="display-5 text-dark pt-5">Users should SignUp and then Login to Register for the Events</h1>
//       {/* form submission error */}

//       {error!=undefined && error.length !== 0 && ( //changed here
        
//         <p className="display-3 text-danger text-center">{error}</p>
//       )}
//    <div  className="col-11 col-sm-8 col-md-6 mx-auto" >

//     <form className="border border-dark form mt-1 p-1"
//         onSubmit={handleSubmit(addNewUser)}
//     >

//       <div> 
//         <label htmlFor="name" className="form-label form-control-label text-white">Username</label>
//         <input type="text" id="username" className="form-control mt-1 border  border-dark" placeholder="e.g John" {...register('username')} required />
//       </div>

//       <div> 
//         <label htmlFor="email" className="form-label form-control-label text-white">Email</label>
//         <input type="email" id="email" className="form-control mt-1 border-dark" {...register('email')} required></input>
//       </div>

//       <div className="mx-auto"> 
//         <label htmlFor="password" className="form-label form-control-label text-white">Password</label>
//         <input type="password" id="password" className="form-control mt-1 border-dark" {...register('password')} required></input>
//       </div>

      
//       <div className="mx-auto">
//       <button type="submit" className="btn bg-danger mt-3 rounded text-white p-1 border border-danger" >Register</button>
//       </div>
//     </form>
//   </div>
// </div>
//   )
// }

// export default Register


// // import React from 'react'
// // import './Register.css'
// // import { useForm } from 'react-hook-form';


// // function Register() {

// //    let { register,handleSubmit,formState: { errors }, }=useForm();   
// //   return (
// //     <div className="container mx-auto">
         
// //          <h4 className="text-dark pt-5 mb-3">Users should signup and then login to avail our services</h4>
// //          <form className="form mt-1 p-3">
            

// //           <div> 
// //              <label htmlFor="name" className="form-label form-control-label text-white">Username</label>
// //              <input type="text" id="username" className="form-control" placeholder="e.g John" 
// //                 {...register('username')}
// //                  required />
// //           </div>

// //          <div> 
// //           <label htmlFor="email" className="form-label form-control-label text-white">Email</label>
// //          <input type="email" id="email" className="form-control" 
// //              {...register('email')} 
// //              required></input>
// //         </div>

// //       <div className="mx-auto"> 
// //          <label htmlFor="password" className="form-label form-control-label text-white">Password</label>
// //         <input type="password" id="password" className="form-control" 
// //            {...register('password')} 
// //            required></input>
// //       </div>

      
// //       <div className="mx-auto">
// //          <button type="submit" className="btn mt-3 rounded p-1" >Register</button>
// //       </div>

// //          </form>
// //     </div>
// //   )
// // }

// // export default Register


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from "axios";

function Register() {
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

let addNewUser = (newUser) => {
   console.log(newUser.email);
  //  let fd = new FormData();
  //  console.log(fd.user);
  //  fd.append("user", JSON.stringify(newUser));
  
   axios.post("http://localhost:3000/user-api/register-user", newUser)
     .then((response) => {
       if (response.status === 201) {
         console.log("navigated to login page");
         navigate("/login");
       } else {
         setError(response.data.message);
       }
     })
     .catch((err) => {
       console.log("err in user signup", err);
       if (err.response) {
         setError(err.message);
       } else if (err.request) {
         setError(err.message);
       } else {
         setError(err.message);
       }
     });
 }


  return (
    <div className="container mx-auto row">
      <h4 className="text-dark pt-5">Users should signup and then login to register for the events</h4>
      {error && (
        <p className="display-3 text-danger text-center">{error}</p>
      )}
      <div className="col-11 col-sm-8 col-md-6 mx-auto">
        <form className=" form mt-1 p-4" onSubmit={handleSubmit(addNewUser)}>
          <div> 
            <label htmlFor="name" className="form-label form-control-label text-white mb-0">Username</label>
            <input type="text" id="username" className="form-control" placeholder="e.g John" {...register('username')} required />
          </div>
          <div className="mt-1"> 
            <label htmlFor="email" className="form-label form-control-label text-white mb-0">Email</label>
            <input type="email" id="email" className="form-control" {...register('email')} required />
          </div>
          <div  className="mt-1"> 
            <label htmlFor="password" className="form-label form-control-label text-white mb-0">Password</label>
            <input type="password" id="password" className="form-control" {...register('password')} required />
          </div>
         
          <div  className="mt-1"> 
            <label htmlFor="mobile" className="form-label form-control-label text-white mb-0">Mobile No</label>
            <input type="tel" id="mobile" className="form-control" {...register('mobile')} required />
          </div>
            <button type="submit" className="btn mt-3 rounded p-1 mx-auto">Register</button>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
