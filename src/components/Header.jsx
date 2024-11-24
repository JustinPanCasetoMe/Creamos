import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaRegSmile, FaEnvelope } from "react-icons/fa";
import Carousel from './Carousel'

const Header = () => {

  const [profileHover, setProfileHover] = useState(false)
  const [subMenuHover, setSubMenuHover] = useState('')

  const handleProfileHover = () => {
    setProfileHover(!profileHover)
  }

  const handleSubMenuHover = (subMenu) => {
    setSubMenuHover(subMenu)
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
          <ul className='df jc-fe pd-20' style={{width:'18%'}}>
            <li className=''>
              <Link className='pd-20'><FaEnvelope size={40} /></Link>
            </li>
            <li className=''>
              <Link className='pd-20'><FaBell size={40} /></Link>
            </li>
            <li className='' style={{position:'relative'}}>
              <Link className='pd-20'
                to='/Creamos/profile/2534'
                onMouseEnter={handleProfileHover}
                onMouseLeave={handleProfileHover}
              >
                <FaRegSmile size={40} />
                <div style={{paddingTop:'20%'}}>
                  <ul className={`subMenu ${profileHover ? '' : 'dn'}`}>
                    <Link
                      to={{}}
                      className='df aln-itm-c '
                    >
                      <FaRegSmile size={30} className='mg-r-20'/>
                      <li className=''>查看星球</li>
                    </Link>
                    <Link
                      to={{}}
                      className={`${subMenuHover == 'CreamosSettings' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('CreamosSettings')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
                      <li>星球設定</li>
                    </Link>
                    <Link
                      to={{}}
                      className={`${subMenuHover == 'BasicSettings' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('BasicSettings')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
                      {console.log(subMenuHover)}
                      <li>基本資料設定</li>
                    </Link>
                    <Link
                      to={{}}
                      className={`${subMenuHover == 'ChangePassword' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('ChangePassword')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
                      <li>更改密碼</li>
                    </Link>
                    <Link
                      className={`${subMenuHover == 'ProjectManager' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('ProjectManager')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
                      <li>管理合作專案</li>
                    </Link>
                    <Link
                      className={`${subMenuHover == 'SavedArts' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('SavedArts')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
                      <li>已儲存作品</li>
                    </Link>
                    <Link
                      className={`${subMenuHover == 'Logout' ? 'subMenuHover' : ''}`}
                      onMouseEnter={() => handleSubMenuHover('Logout')}
                      onMouseLeave={() => handleSubMenuHover('')}
                    >
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