import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

function PublicRoutes({language}) {
  console.log("LLLLLLLL",language)
  return (
    <Routes>
        <Route path='/' element={<Home language={language}/>}/>
        <Route path='/about' element={<About language={language}/>}/>
       
               
    </Routes>
  )
}

export default PublicRoutes