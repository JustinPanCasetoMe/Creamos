import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegSmile } from "react-icons/fa";
import Menu from '../components/Menu'
import projectList from '../datas/projectList.json'
import Unavailable from './Unavailable';
import languageList from '../datas/language.json'
import locationList from '../datas/location.json'
import typeList from '../datas/menuList.json'

const Home = () => {

    const ScreenWidth = window.innerWidth

    const [menuItem, setMenuItem] = useState(null)
    const [tabItem, setTabItem] = useState('cooperation')

    const handleMenuItemChange = (newMenuItem) => {
        setMenuItem(newMenuItem)
    }
    const {Creator} = useParams()

    console.log('Creator = ', Creator)


    const tabRender = () => {



        return(
            <div className='df jc-sb aln-itm-c' style={{height:'80px'}}>
                <div className='df' style={{width:'30%'}}>
                    <Link
                        to={{}}
                        className={`mg-r-30 pd-b-10 ${tabItem == 'cooperation' ? 'tabItemActive' : ''}`}
                        onClick={() => setTabItem('cooperation')}
                    >
                        <h3>合作專案</h3>
                    </Link>
                    <Link
                        to={{}}
                        className={`pd-b-10 ${tabItem == 'projectList' ? 'tabItemActive' : ''}`}
                        onClick={() => setTabItem('projectList')}
                    >
                        <h3>作品列表</h3>
                    </Link>
                </div>
                <div className='df jc-fe' style={{width:'70%'}}>
                    <select name="" id="" className='mg-r-20'>
                        <option value="">是否付費？</option>
                        <option value="">是</option>
                        <option value="">否</option>
                    </select>
                    <select name="" id="" className='mg-r-20'>
                        <option value="">語言（可複選）</option>
                        {languageList.map((language, index) => {
                            return(
                                <option value={language.id} key={index}>{language.language}</option>
                            )
                        })}
                    </select>
                    <select name="" id="" className='mg-r-20'>
                        <option value="">地點（可複選）</option>
                        {locationList.map((location, index) => {
                            return(
                                <option value={location.id} key={index}>{location.location}</option>
                            )
                        })}
                    </select>
                    <select name="" id="" className='mg-r-20'>
                        <option value="">種類</option>
                        {typeList.map((type, index) => {
                            return(
                                <option value={type.id} key={index}>{type.menu}</option>
                            )
                        })}
                    </select>
                    <input type="button" value='搜尋' className='pd-w-10'/>
                </div>
            </div>
        )
    }

    const cooperateRender = () => {
        return(
            <>
                <Link to={`/Creamos/seekCollaborator`} className='df pd-10 mg-b-20 cooperateContent' style={{color:'#000000'}}>
                    <div
                        style={{backgroundColor:'#ffffff', width:'30%'}}
                        className={`mg-r-10 pd-10`}
                    >
                        <h3>合作專案名稱</h3>
                        <h3>內容描述</h3>
                    </div>
                    <div style={{backgroundColor:'#ffffff', width:'70%'}} className='pd-10'>
                        <h3 style={{color:'red'}}>徵</h3>
                        <h3>作曲者 藍調 2人</h3>
                        <h3>付費夥伴 音樂製作 混音 1人</h3>
                        <h3>#中文 #線上</h3>
                    </div>
                </Link>
                <Link to={`/Creamos/seekCollaborator`} className='df pd-10 mg-b-20 cooperateContent' style={{color:'#000000'}}>
                    <div
                        style={{backgroundColor:'#ffffff', width:'30%'}}
                        className={`mg-r-10 pd-10`}
                    >
                        <h3>合作專案名稱</h3>
                        <h3>內容描述</h3>
                    </div>
                    <div style={{backgroundColor:'#ffffff', width:'70%'}} className='pd-10'>
                        <h3 style={{color:'red'}}>徵</h3>
                        <h3>作曲者 藍調 2人</h3>
                        <h3>樂手 吉他 1人</h3>
                        <h3>#中文 #線上</h3>
                    </div>
                </Link>
            </>
        )
    }

    const projectListRender = projectList.map((list, index) => {
        return(
            <div
                key={index} style={{width:'18%'}}
                className={`df fd-c mg-b-30`}
            >
                <div className='fw mg-b-10' style={{height:'auto'}}>
                    <Link to={{}}>
                        <img src={list.thumbnail} alt="" className='fw fh'/>
                    </Link>
                </div>
                <div className='df jc-sb aln-itm-c'>
                    <div style={{width:'25%'}}>
                        <Link to={`/Creamos/profile/${list.creatorID}`}>
                            <FaRegSmile size={80} color='#ffffff'/>
                        </Link>
                    </div>
                    <div style={{width:'70%', color:'#ffffff'}} className='pd-10'>
                        <h4>{list.PprojectName}</h4>
                        <h4>{list.type}</h4>
                        <h4>內容描述</h4>
                        <h4>Creator ID: {list.creatorID}</h4>
                    </div>
                </div>
            </div>
        )
    })



    return (
        <>
            <div className={`${375<ScreenWidth && ScreenWidth<=425 ? 'dn' : '' }`}>
                <Menu onMenuItem={handleMenuItemChange}/>
                {tabRender()}
                <div className='df jc-fe'>
                    <Link to='/Creamos/addProject' className='pd-10 mg-b-30 bd-r-sm' style={{backgroundColor:'var(--buttonBG)'}}>新增合作專案</Link>
                    {/* <button className='pd-10 mg-b-30'>新增合作專案</button> */}
                </div>

                {/* 合作專案 */}
                <div className={`${tabItem=='cooperation' ? '' : 'dn'}`}>
                    {cooperateRender()}
                </div>

                {/* 作品列表 */}
                <div
                    className={`df jc-sb fl-wp  ${tabItem=='projectList' ? '' : 'dn'}`}
                    style={{color:'#000000'}}
                >
                    {projectListRender}
                </div>

            </div>

            <div className={`${375<ScreenWidth && ScreenWidth<=425 ? '' : 'dn'}`}>
                <Unavailable />
            </div>
        
        </>
    )
}

export default Home