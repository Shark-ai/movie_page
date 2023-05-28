import React from 'react';

import { Link } from "react-router-dom";

import CenterDiv from '../components/CenterDiv';
import "../assets/style/NotFound.css";

function NotFound() {
  return (
    <>
    <div className="bg"></div>
      <div className='bg-info'>
        <CenterDiv>
          <li className='li'>
            <div className='character'>
              4
            </div>
          </li >
          <li className='li'> 
            <div className='character'>
              0
            </div>
          </li>
          <li className='li'>
            <div className='character'>
              4
            </div>
          </li>
        </CenterDiv>
      <h1>Oops! You seem to be lost.</h1>
        <p className='whiteP'>Here are some helpful link:</p>
        <Link className='link' to='/main/1'>Home</Link>
      </div>
      </>
  )
}

export default NotFound