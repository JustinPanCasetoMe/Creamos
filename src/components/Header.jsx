import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaRegSmile, FaMailBulk } from "react-icons/fa";
import Carousel from './Carousel'

const Header = () => {
  return (
    <div>
      <header className='fw '>
        <div className='df jc-sb aln-itm-c'>
          <div className='Logo df aln-itm-c'>
            <Link to='/Creamos/' className='mg-r-20'>
              {/* <img src="" alt="" /> */}
              <div style={{width:'200px', height:'100px', backgroundColor:'grey'}}></div>
            </Link>
            <h2>使用說明</h2>
          </div>
          <ul className='df jc-sb pd-20' style={{width:'12%'}}>
            <li>
              <Link><FaMailBulk size={40} /></Link>
            </li>
            <li>
              <Link><FaBell size={40} /></Link>
            </li>
            <li>
              <Link to='/Creamos/profile'><FaRegSmile size={40} /></Link>
            </li>
          </ul>
        </div>
        {/* <Carousel></Carousel> */}
      </header>

    </div>
    
  )
}

export default Header