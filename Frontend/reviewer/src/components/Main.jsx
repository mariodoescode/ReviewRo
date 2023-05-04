import React, { Component } from 'react'
import Card from './Card'

export default function Main() {
  const [allProducts, setProducts] = React.useState([])


  React.useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    await fetch('https://dummyjson.com/products')
                          .then(res => res.json()
                          .then(data => setProducts(data.products)))
    console.log(allProducts)
  }

    return (      
    <div className="flex items-center justify-between">
      {allProducts?.map(product => (
        <Card
        id={product.id} 
        title={product.title}
        description={product.description}
        img={product.thumbnail}
        />
        )
      ) }
    </div>
    )
}
