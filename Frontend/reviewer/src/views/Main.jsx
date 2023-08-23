import React from 'react'
import Card from '../components/Card'
import Category from '../components/Category'
import { goToTop } from '../utils/Effects'

export default function Main() {
  const [allCategories, setCategories] = React.useState([])
  const [allProducts, setProducts] = React.useState(null);



  React.useEffect(() => {
    fetchCategories()
    if (allProducts == null) {
      fetchData()
    }
  },[])


  const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories')
          const data = await response.json()
    setCategories(data)
  }

  const fetchProductsByCategory = async (category) => {
    console.log("category " + category)
    const response1 = await fetch('https://dummyjson.com/products/category/' + category)
      const data1 = await response1.json()
    setProducts(data1.products)
  }


  const fetchData = async () => {
    const response1 = await fetch('https://dummyjson.com/products')
          const data1 = await response1.json()
    setProducts(data1.products)
  };



    return (
      <div className='h-full flex'>
        <div className="p-10 flex-row w-fit max-h-full">
          {allCategories?.map(category => (
            <Category
                    key={category.id}
                    name={category}
                    setCategory={fetchProductsByCategory}
            />
          ) )}
          </div>
        <div className="flex flex-wrap  pl-30">
          {allProducts?.slice(0,20).map(product => (
              <Card
                    key={product.id} 
                    title={product.title}
                    description={product.description}
                    img={product.thumbnail}
                    rating={product.rating}
                    category={product.category}
              />
            ))}
        </div>
      <button id="to-top-button" onClick={goToTop} title="Go To Top"
        className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>
      </div>   
    
    )
}
