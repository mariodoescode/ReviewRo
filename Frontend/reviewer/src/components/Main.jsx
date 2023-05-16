import React from 'react'
import Card from './Card'
import Category from './Category'

export default function Main() {
  const [allProducts, setProducts] = React.useState([])
  const [allCategories, setCategories] = React.useState([])


  React.useEffect(() => {
    fetchCategories()
  },[])

  const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories')
          const data = await response.json()
          console.log(data)
    setCategories(data)
  }


  React.useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const response1 = await fetch('https://dummyjson.com/products')
          const data1 = await response1.json()
          console.log(data1.products)
    setProducts(data1.products)
  }


    return (
      <body>
        <div className="flex p-10 m-auto float-left flex-wrap w-20 max-h-full">
          {allCategories?.map(category => (
            <Category
                    key={category.id}
                    name={category}
            />
          ) )}
          </div>
        <div></div>
        <div className="flex flex-wrap m-auto pl-60">
          {allProducts?.slice(0,20).map(product => (
              <Card
                    key={product.id} 
                    title={product.title}
                    description={product.description}
                    img={product.thumbnail}
              />
            ))}
      </div>
      </body>      
    
    )
}
