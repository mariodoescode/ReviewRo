import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Card(props) {
  const navigate = useNavigate()
  const [state, setState] = useState(props)

    return (
    <div className="card-container">
      <a className="card-top">
        <img className="object-cover max-w-xs" src={props.img} alt="product image" /></a>
      <div className="card-bottom" >
        <a>
          <h5 className="card-bottom-title">{props.title}</h5>
          <p className="card-bottom-description">{props.description}</p>
        </a>
        <div className="card-bottom-container">
        <div className="card-bottom-raiting">
          <div className="card-bottom-stars-container">
            <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-blue-300" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">                
              </path>
            </svg>
            <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-blue-300" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">                
              </path>
            </svg>
            <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-blue-300" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">                
              </path>
            </svg>            <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-blue-300" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">                
              </path>
            </svg>
            <svg 
              aria-hidden="true" 
              className="h-5 w-5 text-yellow-300"  
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad">
                  <stop offset="50%" stopColor="rgb(147 197 253)"/>
                  <stop offset="50%" stopColor="white"/>
                </linearGradient>
              </defs>
              <path 
                fill="url(#grad)" 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <span className="card-rating">5.0</span>
          </div>
        </div>
        
        <Link
             to="product"
             state={{
              "id": props.key,
              "title": props.title,
              "description": props.description,
              "img": props.img,
              "rating": props.rating,
              "category": props.category
            }}
          >
            Reviews
        </Link>
        </div>
      </div>
    </div>
    )   
}
