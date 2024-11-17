import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const ProjectRender = () => {

    const [menuItem, setMenuItem] = useState(null)
    const [tabItem, setTabItem] = useState('cooperation')

    const handleMenuItemChange = (newMenuItem) => {
        setMenuItem(newMenuItem)
    }

    const projectRender = () => {
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



    return (
        <div>
            <Menu onMenuItem={handleMenuItemChange}/>
            {projectRender()}
            <div className='df jc-fe'>
                <button className='pd-10'>新增合作專案</button>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ProjectRender