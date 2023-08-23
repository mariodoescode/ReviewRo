import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import jwt from "jwt-decode"



function Login(props) {
  const URL_API_LOGIN = "http://localhost:8080/api/auth/token"
  const cookies = new Cookies();
  const navigate = useNavigate()
  
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const credentials = btoa(`${data.username}:${data.password}`)

  const onTrigger = function (event) {
    event.preventDefault();
    console.log("ontrigger function" + data.username)
    console.log("props " + JSON.stringify(props))
    props.setValue(data.username)
    // Call the parent callback function

}


    async function submitLogin(url = "") {
        try {
          await fetch(url, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin 
            credentials: "same-origin", // include, *same-origin, omit
            headers: { "Authorization": `Basic ${credentials}` },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer",

            }).then(res => (res.text()))
            .then(text => login(text))
        }

         catch (err) {
          alert(err);
        }
      
      }

      const login = (jwt_token) => {
        const decoded = jwt(jwt_token);

        cookies.set("jwt_authorization", jwt_token, {
          expires: new Date(decoded.exp * 1000),
        });
        navigate("/profile")
      };


      function submit(e) {
        e.preventDefault();
        submitLogin(URL_API_LOGIN, 
          {username: data.username,
          password: data.password
      })
      onTrigger(e)

      }


      function handle(e) {
        const newData = {... data }
        newData[e.target.id] = e.target.value
        setData(newData)
      }
   
   
   
   
   
   
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="./icon.png" alt="logo"/>
              ReviewRo   
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Login
                  </h1>
                  <form onSubmit={(e) => submit(e)} className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                          <input type="username" name="username" id="username" onChange={(e)=> handle(e)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" onChange={(e)=> handle(e)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      </div>
                      <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
    );
  }
  
  export default Login;