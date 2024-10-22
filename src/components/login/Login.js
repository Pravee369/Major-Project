import React,{useContext,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { loginContext } from '../contexts/loginContext'
import './Login.css'

function Login() {


  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)

  //  //navigate
   const navigate = useNavigate();
 
   //use form hook
   let {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();



   //user login
   const handleUserLogin=(userCredObj)=>{
    console.log(userCredObj)
    loginUser(userCredObj)
   }


   useEffect(()=>{
    if(userLoginStatus==true){
      navigate(`/user-profile/${JSON.parse((localStorage.getItem('user'))).username}`)
    }
   },[userLoginStatus])

  

  return (
    <div className="add-user mt-0">
     
      {/* form submission error */}
      {error!=undefined &&  error.length !== 0 && (
        <p className="display-3 text-danger text-center">{error}</p>
      )}
      {/* add user form */}
      <div className="row">
         
        <div className="col-11 col-sm-8 col-md-6 mx-auto">
          <form 
          onSubmit={handleSubmit(handleUserLogin)}
          >
            {/* username */}
            <div className="mb-3">
              <label htmlFor="name" className="text-white">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="e.g. John"
                {...register("username", { required: true })}
                required
              />
              {/* validation errors for name */}
              {errors.username?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Username is required
                </p>
              )}
            </div>
            {/* password */}
            <div className="mb-3">
              <label htmlFor="name" className="text-white">Password</label>
              <input
                type="password"
                placeholder="*********"
                id="password"
                className="form-control"
                 {...register("password", { required: true })}
                required
              />
              {/* validation errors for name */}
              {errors.password?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  * Password is required
                </p>
              )}

              
            </div>
            
           
           
           
            {/* submit button */}
            <button type="submit" className="btn btn-primary text-dark">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login