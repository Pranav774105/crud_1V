import React from 'react'
import { useForm } from 'react-hook-form'
import { saveUserToDB } from '../AppApiServices/AppApiServices'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    const {register, handleSubmit, reset, formState:{ errors }} = useForm()
    const nav = useNavigate()
    function saveUser(userdata){
        saveUserToDB(userdata)
        nav('/show')
    }

  return (
    <div className='container w-50'>
        <form onSubmit={handleSubmit(saveUser)}> 
            <div className='col-nb-3'>
                <label htmlFor='inputUsername' className='form-label'>Username</label>
                <input type='text' className='form-control' id='inputUsername' {...register('username',{
                    required:{
                        value:true,
                        message:'This field is required'
                    },
                    minLength:{
                        value:3,
                        message:'Minimun 3 char are reqired'
                    },
                    maxLength:{
                        value:20,
                        message:'Maximun 20 char are allowed'
                    },
                    pattern:{
                        value:/^[A-Za-z0-9]*$/,
                        message:'No Special Char allowed'
                    }
                })}/>
                <p className='text-danger fw-blod'>{errors.username && errors.username.message}</p>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputemail' className='form-label'>Email</label>
                <input type='email' className='form-control' id='inputemail' {...register('email',{
                    required:{
                        value:true,
                        message:'This field is required'
                    },
                    pattern:{
                        value:/^[A-za-z1-10_.]+@[a-zA-Z0-9]+\.[a-z.].{3,6}$/,
                        message:'Plz enter valid Email'
                    }
                })}/>
                <p className='text-danger fw-blod'>{errors.email && errors.email.message}</p>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputpassword' className='form-label'>Password</label>
                <input type='password' className='form-control' id='inputpassword' {...register('password',{
                    required :{
                        value:true,
                        message:'This Field is required'
                    },
                    pattern:{
                        value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*_.])[A-Za-z\d!@#$^&*.]{8,20}$/,
                        message: 'Password should contain 1 uppercase char, 1 lowercase and 1 digit should have length 1-20' 
                    }
                })}/>
                <p className='text-danger fw-blod'>{errors.email && errors.email.message}</p>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputfullname' className='form-label'>Full Name</label>
                <input type='text' className='form-control' id='inputfullname' {...register('fullname')}/>
            </div>
            <div className='col-nb-3'>
                <label htmlFor='inputAge' className='form-label'>Age</label>
                <input type='number' className='form-control' id='inputAge' {...register('age',{
                    required:{
                        value:true,
                        message:'This field is required'
                    },
                    min:{
                        value:18,
                        message:'Minimun age 18 is required'
                    },
                    max:{
                        value:100,
                        message:'Sorry you are to old to create account'
                    }
                })}/>
                <p className='text-danger fw-blod'>{errors.age && errors.age.message}</p>
            </div>
            <button type='submit' className='btn btn-outline-success col-sm-5'>Create User</button>
            <button type='button' className='btn btn-outline-danger col-sm-5 float-end'onClick={()=>{reset()}}>Reset</button>
        </form>
    </div>
  )
}

export default CreateUser