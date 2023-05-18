import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import ProductPage from './components/ProductPage'
import RegisterPage from './components/RegisterPage'
import AccountPage from './components/AccountPage'


function App() {

  return (
  <div className=' flex-auto'>
    <Header />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Main />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/registerpage' element={<RegisterPage />}></Route>
        <Route path='/accountpage' element={<AccountPage />}></Route>
      </Routes>
    <Footer />
  </div>
  )
}

export default App
