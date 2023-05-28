import React from 'react'
import {NavLink} from "react-router-dom"

import "../assets/style/Pagination.css"

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i);
}
  return (
    <nav className='pagination-nav'>
        <ul className='pagination-ul'>
            {pageNumbers.map(number => (
                <NavLink  key={number} className='pagination-a' onClick={() => paginate(number)} to={`/main/${number}`}>
                    <li className='pagination-li' >
                        {number}
                    </li>
                </NavLink>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination