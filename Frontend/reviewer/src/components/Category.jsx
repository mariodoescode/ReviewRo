import React from 'react'

export default function Category (props) {


    return (
      <div>
         <ul className="flex items-center">
            
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer font-light hover:font-serif">
              <a href="">{
              props.name
              }{props.id}</a>
            </li>
        </ul>
      </div>
    )
  }
