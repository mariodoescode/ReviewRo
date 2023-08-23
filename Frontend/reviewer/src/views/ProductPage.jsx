import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'universal-cookie'

export default function Product() {
    const cookies = new Cookies()
    const location = useLocation();
    const [reviews, setReviews] = useState([])

    React.useEffect(() => {
        fetchData()
    },[])

        
        const fetchData = async () => {
            const response1 = await fetch("http://localhost:8080/api/product/reviews/" + location.state.id, {
                method: "GET",
                mode: "cors", // no-cors, *cors, same-origin 
                credentials: "same-origin", // include, *same-origin, omit
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer"
            })
                  const data1 = await response1.json()
            setReviews(data1)
          }
      function toggleFill() {
        console.log("toggle fill")
      }


    return (
        <div className=" max-w-full max-h-full bg-gray-100">
            <div className="max-w-full flex justify-center items-center gap-6 my-6 bg-white border-2">
                <div className="flex p-10 items-center">
                    <img className="max-w-xs" src={location.state.img}></img>
                    <div className="max-w-full ">
                        <h1 className=" text-left text-5xl font-bold pl-10 ">{location.state.title}</h1>
                        <p className="pl-10 my-2 font-serif">{location.state.description}</p>
                        <div className="flex max-w-xs pl-10">
                        <div class="star-rating">
                        <ul class="flex justify-center">
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-1 h-14 w-14 text-warning text-yellow-300"
                                id="1"
                                onClick={toggleFill}
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-1 h-14 w-14 text-warning text-yellow-300"
                                id="2"      
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-1 h-14 w-14 text-warning text-yellow-300"
                                id="3"
                                >     
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-1 h-14 w-14 text-warning text-yellow-300"
                                id="4"
                                >    
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="mr-1 h-14 w-14 text-warning text-yellow-300"
                                id="5"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                        </ul>
                        </div>
                        <h1 className=" content-center m-3 text-2xl">{location.state.rating}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid row-auto items-start ml-64" >
                <section className="max-w-4xl h-16 rounded-2xl gap-6 my-6 bg-white border-2">
                    <div className=" flex text-left w-fit my-4 pl-16">
                        <a href="/writeReview">
                            Write a review
                        </a>
                        
                    </div>
                    
                </section>
                {reviews.map(review => 
                <div className=" grid max-w-4xl h-32 rounded-2xl gap-6 my-6 bg-white border-2">
                    <h1 className=" font-bold m-2 border-b-2">{review.appUser.username}</h1>
                    <h1>{review.message}</h1>
                    </div>)}   
                </div>
        </div>
    );
};

