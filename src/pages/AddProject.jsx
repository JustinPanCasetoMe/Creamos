import React from 'react'
import characterList from '../datas/character.json'
import locationList from '../datas/location.json'
import languageList from '../datas/language.json'

const AddProject = () => {
  return (
    <div>
        <h2 className='mg-b-30'>合作專案名稱</h2>
        <div>
            <div className='df aln-itm-c'>
                <h2>徵集合作夥伴</h2>
                <input type="text" />
            </div>
            <div className='mg-b-30'>
                <table className='fw mg-b-20 pd-10' style={{backgroundColor:'var(--greyBG-02)'}}>
                    <thead>
                        <tr>
                            <th><h2>徵集夥伴角色</h2></th>
                            <th><h2>角色種類</h2></th>
                            <th><h2>需求人數</h2></th>
                            <th><h2>詳細描述</h2></th>
                            <th><h2>付費與否</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{width:'25%'}}>
                                <div className='df aln-itm-c'>
                                <h3 className='mg-r-10'>參與角色</h3>
                                    <select name="" id="">
                                        {characterList.map((character, index) => {
                                            return(
                                                <option value={character.character} key={index}>{character.character}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </th>
                            <td>
                                <h3>按參與角色跳不同種類</h3>
                            </td>
                            <td>
                                <div className='df aln-itm-c'>
                                <h3 className='mg-r-10'>所需人數</h3>
                                    <select name="" id="">
                                        {Array.from({length:10}, (_, index) => index+1).map((number, index) => {
                                            return(
                                                <option value={number} key={index}>{number}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <textarea name="" id="" style={{resize: 'vertical'}}></textarea>
                            </td>
                            <td>
                                <h3>付費與否</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='pd-10'>+</button>
            </div>
            <div className='mg-b-30'>
                <h2>專案合作地點（可複選）</h2>
                <div className='df fl-wp'>
                    {locationList.map((location, index) => {
                        return(
                            <div style={{width:'120px'}} key={index}>
                                <input
                                    type="checkbox"
                                    id={location.id}
                                    name={location.location}
                                    value={location.location}
                                    style={{color:'#fff', backgroundColor:'#fff'}}
                                    className='mg-r-10' />
                                <label htmlFor={location.id} className='fw'>{location.location}</label>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='mg-b-30'>
                <h2>作品語言（可複選）作品尚無語言者不需勾選</h2>
                <div className='df fl-wp'>
                    {languageList.map((language, index) => {
                        return(
                            <div style={{width:'120px'}} key={index}>
                                <input
                                    type="checkbox"
                                    id={language.id}
                                    name={language.language}
                                    value={language.language}
                                    style={{color:'#fff', backgroundColor:'#fff'}}
                                    className='mg-r-10' />
                                <label htmlFor={language.id} className='fw'>{language.language}</label>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='mg-b-30'>
                <h2>合作專案內容描述</h2>
                <textarea name="" id="" className='fw' style={{height:'100px', resize:'vertical'}}></textarea>
            </div>
            <div>
                <h2>若此合作專案有製作中的作品，可按加號與此合作專案連結，可選擇數個單一作品或複合作品：</h2>
                <button>+</button>
            </div>
        </div>
        <div className='df jc-c aln-itm-c'>
            <div className='df jc-sb' style={{width:'200px'}}>
                <button>儲存</button>
                <button>完成送出</button>
            </div>
        </div>
    </div>
  )
}

export default AddProject