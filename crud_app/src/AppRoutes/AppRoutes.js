import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppError, CreateUser, DeleteUser, ShowUser, UpdateUser } from '../components'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'create/'}/>}/>
        <Route path='/create' element={<CreateUser/>} />
        <Route path='/show' element={<ShowUser/>} />
        <Route path='/update/:userId' element={<UpdateUser/>} />
        <Route path='/delete/:userId' element={<DeleteUser/>} />
        <Route path='/*' element={<AppError/>} />
    </Routes>
  )
}

export default AppRoutes