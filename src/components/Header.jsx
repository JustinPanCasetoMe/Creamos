import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaRegSmile, FaEnvelope } from "react-icons/fa";
import Carousel from './Carousel'

const Header = () => {

  const [profileHover, setProfileHover] = useState(false)

  const handleProfileHover = () => {
    setProfileHover(!profileHover)
  }

  return (
    <div>
      <header className='fw'>
        <div className='df jc-sb aln-itm-c'>
          <div className='Logo df aln-itm-c'>
            <Link to='/Creamos/' className='mg-r-20'>
              {/* <img src="" alt="" /> */}
              <div style={{width:'200px', height:'100px', backgroundColor:'grey'}}></div>
            </Link>
            <h2>使用說明</h2>
          </div>
          <ul className='df jc-sb pd-20' style={{width:'18%'}}>
            <li className=''>
              <Link><FaEnvelope size={40} /></Link>
            </li>
            <li className=''>
              <Link><FaBell size={40} /></Link>
            </li>
            <li className='' style={{position:'relative'}}>
              <Link to='/Creamos/profile/2534' onMouseEnter={handleProfileHover} onMouseLeave={handleProfileHover}>
                <FaRegSmile size={40} />
                <div style={{paddingTop:'20%'}}>
                  <ul className={`subMenu ${profileHover ? '' : 'dn'}`}>
                    <Link to={{}} className='df aln-itm-c mg-b-20'>
                      <FaRegSmile size={30} className='mg-r-20'/>
                      <li className=''>查看星球</li>
                    </Link>
                    <Link to={{}} className='mg-b-20'>
                      <li>星球設定</li>
                    </Link>
                    <Link to={{}} className='mg-b-20'>
                      <li>基本資料設定</li>
                    </Link>
                    <Link to={{}} className='mg-b-20'>
                      <li>更改密碼</li>
                    </Link>
                    <Link to={{}} className='mg-b-20'>
                      <li>管理合作專案</li>
                    </Link>
                    <Link to={{}} className='mg-b-20'>
                      <li>已儲存作品</li>
                    </Link>
                    <Link to={{}}>
                      <li className=''>登出</li>
                    </Link>
                  </ul>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* <Carousel></Carousel> */}
      </header>

    </div>
    
  )
}

export default Header