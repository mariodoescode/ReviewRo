import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'universal-cookie'

export default function Product() {
    const cookies = new Cookies()
    const location = useLocation();
    const [reviews, setReviews] = useState(null)

    React.useEffect(() => {
        fetchData()
    },[])

    async function fetchData(url = "") {
        const jwt_token = cookies.get("jwt_authorization")

          try {
            await fetch("http://localhost:8080/api/product/reviews/" + location.state.id,{
              method: "GET",
              mode: "cors", // no-cors, *cors, same-origin 
              credentials: "same-origin", // include, *same-origin, omit
              headers: { "Authorization": `Bearer ${jwt_token}` },
              redirect: "follow", // manual, *follow, error
              referrerPolicy: "no-referrer",
              }).then(res => res.json())
              .then(res => setReviews(res))
          }
  
           catch (err) {
            alert(err)
          }
        
        }
      


    return (
        <div>
            <div className="product-card">
                <div>
                    {}
                </div>
            </div>
        </div>
    );
};

