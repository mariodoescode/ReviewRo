import Logo from "../assets/Logo.png"
import Cookies from "universal-cookie"
import {  useState } from "react";
import jwtDecode from "jwt-decode";
import  { useNavigate } from 'react-router-dom'
import React from "react";

export default function Header () {
    const cookies = new Cookies()
    const navigate = useNavigate
    const [user, setUser] = useState()


    React.useEffect(() => {
      if(cookies.get("jwt_authorization")) {
        const jwt_token = cookies.get("jwt_authorization")
        const decoded = jwtDecode(jwt_token);
        const token = JSON.parse(JSON.stringify(decoded))
        setUser(token.sub)
      }
    },[])

    const logout = function() {
      setUser(undefined)
      cookies.remove("jwt_authorization")
      navigate("/login")
    }

  


    return (
        <header 
          className="header sticky top-0 bg-white rounded-xl shadow-xl flex items-center  justify-between px-8 py-02 left-0 w-full z-10">
          <a href="/" className="w-2/12 flex items-center justify-center">
            <img className="w-full" src={Logo} alt="Logo"/>
          </a>

          <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div>
              <div className="container mx-auto flex items-center justify-between text-gray-900">
                <ul className="hidden items-center gap-6 lg:flex">
                {user != undefined ? (<></>) : 
                  (<li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 hover:font-serif">
                    <a className="flex items-center" href="/register">
                      Register
                    </a>
                  </li>)}
                 {user != undefined ? ( <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 hover:font-serif">
                    <a className="flex items-center" href="/profile">
                      Profile
                    </a>
                  </li>): <></>}
                  {user != undefined ? ( <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 hover:font-serif">
                    <a className="flex items-center" onClick={logout}>
                      Logout
                    </a>
                  </li>) : 
                  (<li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 hover:font-serif" >
                    <a className="flex cursor-pointer items-center" href="/login">
                      Login
                    </a>
                  </li>)}
                </ul>
                <button
                  className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  data-collapse-target="navbar">
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div
                className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                data-collapse="navbar">
                <div className="container mx-auto pb-2">
                  <ul className="mt-2 mb-4 flex flex-col gap-2">
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <a className="flex items-center" href="#">
                        Pages
                      </a>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <a className="flex items-center" href="#">
                        Account
                      </a>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <a className="flex items-center" href="#">
                        Blocks
                      </a>
                    </li>
                    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <a className="flex items-center" href="#">
                        Docs
                      </a>
                    </li>
                  </ul>
                  <button
                    className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>


    <div className="w-3/12 flex justify-end">
        
      <form className="flex items-center">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a product..." required />
          </div>
          <button type="submit"  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
          </button>
      </form>


    </div>
</header>
    )
  }
