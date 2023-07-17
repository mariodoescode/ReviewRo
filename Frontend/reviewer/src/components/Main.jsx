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
    setCategories(data)
  }


  React.useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const response1 = await fetch('https://dummyjson.com/products')
          const data1 = await response1.json()
    setProducts(data1.products)
  }

  // const fetchData = async () => {
  //   const response1 = await fetch('http://localhost:8080/products')
  //         const data1 = await response1.json()
  //   setProducts(data1)
  // }

  const toTopButton = document.getElementById("to-top-button");
  var rootElement = document.documentElement;

  window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          toTopButton.classList.remove("hidden");
      } else {
          toTopButton.classList.add("hidden");
      }
  }

  function goToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


    return (
      <body>
        <div className="flex p-10 m-auto float-left flex-wrap w-20 max-h-full absolute">
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
      <button id="to-top-button" onClick={goToTop} title="Go To Top"
        class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">&uarr;</button>
      </body>      
    
    )
}
