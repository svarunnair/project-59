import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

function PublicRoutes({language}) {
  console.log("LLLLLLLL",language)
  return (
    <Routes>
        <Route path='/' element={<Home language={language}/>}/>
         <Route path='/home' element={<Home language={language}/>}/>
               
    </Routes>
  )
}

export default PublicRoutes