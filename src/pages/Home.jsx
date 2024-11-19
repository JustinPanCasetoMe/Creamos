import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegSmile } from "react-icons/fa";
import Menu from '../components/Menu'
import projectList from '../datas/projectList.json'

const Home = () => {

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
                <div className='df jc-sb' style={{width:'70%'}}>
                    <select name="" id=""></select>
                    <select name="" id=""></select>
                    <select name="" id=""></select>
                    <input type="text" />
                    <input type="button" value='搜尋'/>
                </div>
            </div>
        )
    }

    const cooperateRender = () => {
        return(
            <>
                <div
                    style={{backgroundColor:'#ffffff', width:'30%'}}
                    className={`mg-r-10 pd-10`}
                >
                    <h3>合作專案名稱</h3>
                    <h3>內容描述</h3>
                </div>
                <div style={{backgroundColor:'#ffffff', width:'70%'}} className='pd-10'>
                    <h3>徵</h3>
                    <h3>徵</h3>
                </div>
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
        <div>
            <Menu onMenuItem={handleMenuItemChange}/>
            {tabRender()}
            <div className='df jc-fe'>
                <button className='pd-10 mg-b-30'>新增合作專案</button>
            </div>

            {/* 合作專案 */}
            <div
                className={`df pd-10 mg-b-20 cooperateContent  ${tabItem=='cooperation' ? '' : 'dn'}`}
                style={{color:'#000000'}}
            >
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
    )
}

export default Home