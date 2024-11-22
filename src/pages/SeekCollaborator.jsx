import React from 'react'
import { FaHeart, FaRocket, FaRegPlusSquare } from "react-icons/fa";

const SeekCollaborator = () => {
  return (
    <div>
      <div className='mg-b-30'>
        <h2 className='pd-b-10'>合作專案內容描述：</h2>
        <textarea name="" id="" className='pd-10 fw'></textarea>
      </div>
      <div className='mg-b-30 pd-10' style={{backgroundColor:'var(--greyBG-02)'}}>
          <table className='fw mg-b-20'>
              <thead>
                  <tr>
                      <th style={{width:'18%'}}><h2>徵集夥伴角色</h2></th>
                      <th style={{width:'16%'}}><h2>角色種類</h2></th>
                      <th style={{width:'12%'}}><h2>需求人數</h2></th>
                      <th style={{width:'18%'}}><h2>詳細描述</h2></th>
                      <th style={{width:'22%'}}><h2>付費與否</h2></th>
                      <th style={{width:'22%'}}><h2>徵集處</h2></th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <th>
                        <h4>作詞者</h4>
                    </th>
                    <td className='pd-r-20'>
                        <h4>＃自我反思 ＃日常生活</h4>
                    </td>
                    <td className='pd-r-20'>
                        <h4>1人</h4>
                    </td>
                    <td className='pd-r-20'>
                        <textarea name="" id="" style={{resize: 'vertical'}} className='fw pd-10' />
                    </td>
                    <td className='pd-r-20'>
                        <h4>徵免費夥伴</h4>
                    </td>
                    <td className='pd-r-20'>
                        <h4>徵免費夥伴</h4>
                    </td>
                </tr>
              </tbody>
          </table>
          <button className='pd-10'>+  Add new row</button>
      </div>
      <div className='mg-b-30'>
        <div style={{width:'100%', height:'150px', backgroundColor:'var(--greyBG-02)'}} className='mg-b-10'></div>
        <div className='df'>
          <FaRocket size={40} className='mg-r-30'/>
          <FaRegPlusSquare size={40}/>
        </div>
      </div>
      <div className='mg-b-30'>
        <div style={{width:'100%', height:'150px', backgroundColor:'var(--greyBG-02)'}} className='mg-b-10'></div>
      </div>
      <div className='mg-b-30'>
        <h2 className='mg-b-10'>參與者</h2>
        <div style={{width:'100%', height:'150px', backgroundColor:'var(--greyBG-02)'}} className='mg-b-10'></div>
      </div>
      <div className='mg-b-30'>
        <h2 className='mg-b-10'>留言</h2>
        <textarea name="" id="" className='fw pd-10' style={{height:'150px'}} placeholder='Please comment here!'></textarea>
      </div>
    </div>
  )
}

export default SeekCollaborator