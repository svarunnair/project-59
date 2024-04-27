import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Job from '../Pages/Job'

function PublicRoutes({language}) {

  return (
    <Routes>
        <Route path='/' element={<Home language={language}/>}/>
        <Route path='/about' element={<About language={language}/>}/>
        <Route path='/signin' element={<Signin language={language}/>}/>
        <Route path='/signup' element={<Signup language={language}/>}/>
         <Route path='/job' element={<Job language={language}/>}/>
       
               
    </Routes>
  )
}

export default PublicRoutes