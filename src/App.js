import { useState } from 'react'
import {Routes, Route,  BrowserRouter as Router} from 'react-router-dom' 
import React from 'react'
import { Home} from './components/home'
import { Login} from './components/Login'
import { Register} from './components/Register'
import Profile from './components/profile'
import OrganDonationForm from './components/organ'
function App() {

  return (
    <Router >
    <Routes>
    <Route path="/" element={<Home/>}/>  
    <Route path="/login" element={<Login/>}/>  
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/organs" element={<OrganDonationForm/>}/> 
    </Routes>
   
  </Router>
  )
}

export default App
