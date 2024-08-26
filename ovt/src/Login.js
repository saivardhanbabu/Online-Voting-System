import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm();
  function onSignUpSubmit(userCred){
    console.log(userCred)
  }
  return (
    <div className='container'>
        <div class="card" className='row justify-content-center mt-5'>
        <div className='col-lg-4 col-md-4 col-sm-4'>
            <div className='card-shadow'>
                <div className='card-title border-bottom text-center'>
                  <h2>Login</h2>
                </div>
                <div className='card-body'>
                      <form onSubmit={handleSubmit(onSignUpSubmit)} >
                        <input 
                        type='text'
                        className='form-control mt-4'
                        id="username"
                        placeholder='Username'
                        {...register("username",({required:true}))}/>
                        {errors.username && errors.username.type==="required"  && <p className='text-danger'>Username is required</p>}
                        <br></br>
                        <input 
                        className='form-control'
                        type='password'
                        id="password"
                        placeholder='Password'
                        {...register("password",{required:true})}/>
                        {errors.password && errors.password.type==="required" && <p className='text-danger'>Password is required</p>}
                        <br></br>
                        <button className='btn btn-success text-center'>Login</button>
                      </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login