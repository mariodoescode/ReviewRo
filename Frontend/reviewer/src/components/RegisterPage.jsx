import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const URL_API = "http://localhost:8080/api/auth/signup"


export default function RegisterPage() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        // navigate('/login');
        return response.json(); // parses JSON response into native JavaScript objects
      }


      function submit(e) {
        e.preventDefault();
        postData(URL_API, {
            username: data.username,
            email: data.email,
            password: data.password
        })
        navigate("/login")
      }


      function handle(e) {
        const newData = {... data }
        newData[e.target.id] = e.target.value
        setData(newData)
      }

 
 

  return (
    <section className="register-page">
  <div className="register-page-container">
      <a href="#" className="logo">
          <img className="logo-image" src="./icon.png" alt="logo"/>
          ReviewRo   
      </a>
      <div className="register-card">
          <div className="register-card-inner">
              <h1 className="register-card-title">
                  Create an account
              </h1>
              <form onSubmit={(e) => submit(e)} className="register-form-container" action="#">
                    <div>
                      <label 
                        for="username" 
                        className="register-label">
                        Username
                        </label>
                      <input 
                        type="username" 
                        name="username" 
                        id="username" 
                        onChange={(e)=> handle(e)} 
                        className="register-input" 
                        placeholder="John Doe" 
                        required=""
                        />
                  </div>
                  <div>
                      <label 
                        for="email" 
                        className="register-label">
                        Your email
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        id="email"
                        onChange={(e)=> handle(e)} 
                        className="register-input" 
                        placeholder="name@company.com" 
                        required=""
                      />
                  </div>
                  <div>
                      <label 
                        for="password" 
                        className="register-label">
                        Password
                      </label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e)=> handle(e)} 
                        placeholder="••••••••" 
                        className="register-input" 
                        required=""
                      />
                  </div>
                  <div className="register-conditions">
                      <div className="flex items-center h-5">
                        <input 
                          id="terms" 
                          aria-describedby="terms" 
                          type="checkbox" 
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                          required=""
                        />
                      </div>
                      <div 
                        className="ml-3 text-sm">
                          <label 
                            for="terms" 
                            className="font-light text-gray-500 dark:text-gray-300" 
                            required>I accept the 
                            <a 
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500" 
                              href="#"> Terms and Conditions
                            </a>
                          </label>
                      </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Create an account
                  </button>
                  <p 
                    className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? 
                    <a 
                      href="#" 
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    > Login here
                    </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
