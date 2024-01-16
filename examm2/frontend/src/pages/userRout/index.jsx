import React from 'react'
import Navbar from '../../layout/navbar'
import { Outlet } from 'react-router-dom'

function UserRout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default UserRout