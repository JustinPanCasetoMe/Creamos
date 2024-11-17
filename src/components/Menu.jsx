import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({onMenuItem}) => {

  const menuItems = [
    { 'menu' : '作詞者星系', 'id': 'lyricsCmos'},
    { 'menu' : '作曲者星系', 'id': 'compriseCmos'},
    { 'menu' : '故事創作者星系', 'id': 'storyCmos'},
    { 'menu' : '歌手星系', 'id': 'singerCmos'},
    { 'menu' : '樂手星系', 'id': 'bandCmos'},
    { 'menu' : '動畫師星系', 'id': 'AnimatorCmos'},
    { 'menu' : '影視/MV創作星系', 'id': 'visualCmos'},
    { 'menu' : '音樂創作星系', 'id': 'musicCmos'},
  ]

  const [menuItem, setMenuItem] = useState('lyricsCmos')
  console.log(menuItem)

  const menuItemRender = menuItems.map((menu, index) => {
    return(
      <li key={index} onClick={()=>{setMenuItem(menu.id)}}>
        <Link to={{}} className={`pd-10 db menuItem ${menu.id==menuItem ? 'menuItemActive' : ''}`}>
          <h2>{menu.menu}</h2>
        </Link>
      </li>
    )
  })

  return (
      <ul className='fw df jc-sb'>
        {menuItemRender}
      </ul>
  )
}

export default Menu