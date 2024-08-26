import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
function Signup() {
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
                  <h2>Sign Up</h2>
                </div>
                <div className='card-body'>
                      <form onSubmit={handleSubmit(onSignUpSubmit)} >
                        <input
                        placeholder='Email'
                        id="name"
                        className='form-control mt-4'
                        {...register("Email",({required:true}))}/>
                        {errors.Email && errors.Email.type==='required' && (<p className='text-danger'>Username is required</p>)}
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
                        <button className='btn btn-success text-center'>Signup</button>
                      </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup