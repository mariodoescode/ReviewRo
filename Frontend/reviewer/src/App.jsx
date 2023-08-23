import './App.css'
import Footer from './components/Footer'
import Header from './components/Navbar'
import Main from './views/Main'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './views/ProductPage'
import RegisterPage from './views/RegisterPage'
import Profile from './views/Profile'
import Login from './views/Login'
import React from 'react'
import { useState } from 'react'

function App() {


  const [user, setUser] = useState("")
  


  return (
  <div className='flex flex-col place-content-center'>
    <Header user={user}/>
    <Routes>
      <Route exact path='/' element={<Main />}></Route>
      <Route exact path='/product' element={<ProductPage />}></Route>
      <Route exact path='/register' element={<RegisterPage />}></Route>
      <Route exact path='/profile' element={<Profile />} ></Route>
      {/* <Route exact path='/edit-profile' element={<Profile />} ></Route> */}
      <Route exact path='/login' element={<Login setValue={setUser} test={"test"}/>}></Route>
    </Routes>
    <Footer />
  </div>
  )
}

export default App
