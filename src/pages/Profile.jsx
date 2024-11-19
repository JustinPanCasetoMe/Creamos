import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import { FaRegSmile, FaEnvelope, FaPen } from "react-icons/fa";
import projectList from '../datas/projectList.json'
import creatorList from '../datas/users.json'

const Profile = () => {

  const {Creator} = useParams()
  const [menuItem, setMenuItem] = useState(null)
  const [projectHover, setProjectHover] = useState(null)
  
  const handleMenuItemChange = (newMenuItem) => {
    setMenuItem(newMenuItem)
  }

  const handleMouseEnter = (id) => {
    setProjectHover(id)
  }

  const handleMouseLeave = () => {
    setProjectHover(null)
  }
  
  console.log("Creator = ", Creator)
  console.log("projectHover = ", projectHover)

  const creatorRender = creatorList.map((list, index) => {
    console.log(list.creator)
    if(list.creatorID == Creator){
      return(
        <div
          key={index}
          className='df jc-sb pd-20 mg-b-30 profile'
          style={{position:'relative'}}
        >
          <div className='df fd-c fh mg-r-30'>
            <div className='df mg-b-20'>
              <div className='mg-r-30'>
                <FaRegSmile size={120} />
                {/* <div className='txt-aln-c'>{list.creatorID==Creator ? list.creator : '' }</div> */}
                <div className='txt-aln-c'>{list.creator}</div>
              </div>
              <FaEnvelope size={120} />
            </div>
            <div style={{backgroundColor:'#a2a2a2'}} className='pd-20'>
              <h3>地點</h3>
              <h3>個人簡介</h3>
            </div>
          </div>
          <div style={{backgroundColor:'#a2a2a2'}} className='fw pd-20'>
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
          <FaPen size={30} className='edit'/>
        </div>
      )
    }
  })

  const projectListRender = projectList.map((list, index) => {
    return(
      <div
        key={index}
        style={{width:'22%', position:'relative'}}
        className={`mg-b-20 ${list.creatorID == Creator ? '' : 'dn'}`}
        onMouseEnter={() => handleMouseEnter(list.id)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={{}}>
          <div>
            <img src={list.thumbnail} alt=""/>
          </div>
        </Link>
        <div
          style={{position:'absolute', bottom:'0px', backgroundColor:'rgba(0, 0, 0, 0.5)'}}
          className={`${projectHover==list.id ? 'projectHover' : 'dn'}`}
        >
          <h3>{list.projectName}</h3>
          <h3>{list.type}</h3>
        </div>
      </div>
    )
  })



  return (
    <>
      <Menu onMenuItem={handleMenuItemChange}/>
      {/* <div className='df jc-sb pd-20 mg-b-30 profile' style={{position:'relative'}}>
        <div className='df fd-c fh mg-r-30'>
          <div className='df mg-b-20'>
            <div className='mg-r-30'>
              <FaRegSmile size={120} />
              <div className='txt-aln-c'>用戶名</div>
            </div>
            <FaEnvelope size={120} />
          </div>
          <div style={{backgroundColor:'#a2a2a2'}} className='pd-20'>
            <h3>地點</h3>
            <h3>個人簡介</h3>
          </div>
        </div>
        <div style={{backgroundColor:'#a2a2a2'}} className='fw pd-20'>
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
        <FaPen size={30} className='edit'/>
      </div> */}
      {creatorRender}
      <div className='df jc-sb fl-wp'>
        {projectListRender}
      </div>
    </>

  )
}

export default Profile