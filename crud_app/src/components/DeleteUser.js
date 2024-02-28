import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteUserFromDB, fetchUserFromDB } from '../AppApiServices/AppApiServices'

function DeleteUser() {

  const { userId } = useParams('userId')
  const [user, setUser] = useState({})
  const nav = useNavigate

  async function fetchUser(){
    await fetchUserFromDB(userId).then(
      (response)=>{
        setUser(response.data)
      }
    )
  }

  async function deleteUser(){
    await deleteUserFromDB(userId).then(
      (response)=>{
        nav(`/show`)
      }
    ).catch(error =>{
      console.error(error)
    })
  }

  useEffect (()=>{
    fetchUser()
 
  })


  return (
    <div className='container'>
      <h1>Are You Sure You Want to Delete <span>{user.username}</span>???</h1>
      <button type='button' onClick={deleteUser} className='btn btn-outline-danger col-sm-5'>Yes</button>
      <NavLink to={`/show`} className={'btn btn-outline-warning col-sm-5 float-end'}>No</NavLink>
    </div>
  )
}

export default DeleteUser