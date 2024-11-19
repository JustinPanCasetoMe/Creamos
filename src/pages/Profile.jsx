import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import { FaRegSmile, FaMailBulk } from "react-icons/fa";

const Profile = () => {

  const {Creator} = useParams

  const [menuItem, setMenuItem] = useState(null)

  const handleMenuItemChange = (newMenuItem) => {
    setMenuItem(newMenuItem)
  }

  return (
    <>
      <Menu onMenuItem={handleMenuItemChange}/>
      <div className='df'>
        <div>
          <div className='df'>
            <div>
              <Link to='/Creamos/profile'><FaRegSmile size={40} /></Link>
              <div>用戶名</div>
            </div>
            <Link><FaMailBulk size={40} /></Link>
          </div>
          <div>
            <h2>地點</h2>
            <h2>個人簡介</h2>
          </div>
        </div>
        <div>
          <div>
            <ul>
              <li>作詞</li>
              <li>作曲</li>
              <li>說書</li>
              <li>歌手</li>
              <li>樂手</li>
              <li>動畫師</li>
              <li>影視/MV創作</li>
              <li>音樂製作</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </>

  )
}

export default Profile