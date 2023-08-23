import React from 'react'

export default function Category (props) {


    return (
      <div>
         <ul className="flex items-center">
            <li 
              className="p-4 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer font-light hover:font-serif" 
              onClick={() => props.setCategory(props.name)}
            >
              <a >
                {props.name}
                {props.id}
              </a>
            </li>
        </ul>
      </div>
    )
  }
