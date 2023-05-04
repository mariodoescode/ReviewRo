import React, { Component } from 'react'
import Card from './Card'

export default function Main() {
  
  const [products, setProducts] = React.useState({})
  
  const data = fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => console.log(data))

  
  const productData = data.map(product => {
    return (
      <Card 
        id = {product.id}
        title = {product.title}
        description = {product.description}
        price = {product.price}
      />
    )
  })


    return (      
    <body>
      <div>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
      <div>

      </div>

    </body>)
}
