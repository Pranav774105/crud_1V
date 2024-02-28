import React, { useEffect, useState } from 'react'
import { fetchUsersFromDB } from '../AppApiServices/AppApiServices'
import { NavLink } from 'react-router-dom'

function ShowUser() {

  const [users, setUsers] = useState([])
  async function fetchAllUsers(){
    await fetchUsersFromDB().then(
      (response) => {
        console.log(response.data)
        setUsers(response.data)
      }
    ).catch(
      (error) => {
        console.error(error)
      }
    )
  }
  useEffect(()=>{
    fetchAllUsers()
  },[])

  return (
    <div className='container'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>EMAIL</th>
            <th>FULL NAME</th>
            <th>AGE</th>
            <th>UPDATE</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='table-danger'>
          {
            users.map((user)=>{
              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.fullname}</td>
                  <td>{user.age}</td>
                  <td><NavLink to={`/update/${user.id}`}><i className="bi bi-pencil-square"></i></NavLink></td>
                  <td><NavLink to={`/delete/${user.id}`}><i className="bi bi-trash3-fill"></i></NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowUser