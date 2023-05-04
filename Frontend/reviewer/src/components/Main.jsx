import React, { Component } from 'react'
import Card from './Card'

export default function Main() {
  const [allProducts, setProducts] = React.useState([])


  React.useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
    setProducts(data.products)
  }


    return (      
    <div className="flex flex-wrap px-30">
      {allProducts?.map(product => (
        <Card
        key={product.id} 
        title={product.title}
        description={product.description}
        img={product.thumbnail}
        />
        )
      ) }
    </div>
    )
}
