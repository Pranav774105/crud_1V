import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserFromDB, updateUserFromDB } from '../AppApiServices/AppApiServices'
import { useForm } from 'react-hook-form'

function UpdateUser() {

  const { userId } = useParams('userId')
  const {register, handleSubmit, reset, setValue} = useForm()
  const nav = useNavigate()
  async function fetchUser(){
    await fetchUserFromDB(userId).then(
      (response) =>{
        console.log(response.data)
        setValue('username', response.data.username)
        setValue('email', response.data.email)
        setValue('password', response.data.password)
        setValue('fullname', response.data.fullname)
        setValue('age', response.data.age)
      }
    ).catch(error =>{
      console.log(error)
    })
  }

  async function updateUser(userData){
    await updateUserFromDB(userId, userData).then(
      (response) => {
        nav('/show')
      }
    ).catch(error=>{
      console.error(error)
    })
  }

  useEffect(()=>{
    fetchUser()
  })

  return (
    <div className='container'>
      <h1 className='text-info text-center'>Update User</h1>
      <form onSubmit={handleSubmit(updateUser)}>
      <div className='col-nb-3'>
                <label htmlFor='inputUsername' className='form-label'>Username</label>
                <input type='text' className='form-control' id='inputUsername' {...register('username')}/>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputemail' className='form-label'>Email</label>
                <input type='email' className='form-control' id='inputemail' {...register('email')}/>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputpassword' className='form-label'>Password</label>
                <input type='password' className='form-control' id='inputpassword' {...register('password')}/>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputfullname' className='form-label'>Full Name</label>
                <input type='text' className='form-control' id='inputfullname' {...register('fullname')}/>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputAge' className='form-label'>Age</label>
                <input type='number' className='form-control' id='inputAge' {...register('age')}/>
            </div>
            <button type='submit' className='btn btn-outline-success col-sm-5'>Update User</button>
            <button type='button' className='btn btn-outline-danger col-sm-5 float-end'onClick={()=>{reset()}}>Reset</button>
      </form>
    </div>
  )
}

export default UpdateUser