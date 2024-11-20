import React from 'react'
import characterList from '../datas/character.json'
import locationList from '../datas/location.json'

const AddProject = () => {
  return (
    <div>
        <h2 className='mg-b-30'>合作專案名稱</h2>
        <div>
            <div className='df aln-itm-c'>
                <h2>徵集合作夥伴</h2>
                <input type="text" />
            </div>
            <div>
                <table className='fw mg-b-20 pd-10' style={{backgroundColor:'var(--greyBG)'}}>
                    <td style={{width:'30%'}}>
                        <tr><h2>徵集夥伴角色</h2></tr>
                        <tr className='df aln-itm-c'>
                            <h3 className='mg-r-10'>參與角色</h3>
                            <select name="" id="">
                                {characterList.map((character, index) => {
                                    return(
                                        <option value={character.character} key={index}>{character.character}</option>
                                    )
                                })}
                            </select>
                        </tr>
                    </td>
                    <td>
                        <tr><h2>角色種類</h2></tr>
                        <tr>按參與角色跳不同種類</tr>
                    </td>
                    <td>
                        <tr><h2>需求人數</h2></tr>
                        <tr className='df aln-itm-c'>
                            <h3 className='mg-r-10'>所需人數</h3>
                            <select name="" id="">
                                {characterList.map((character, index) => {
                                    return(
                                        <option value={character.character} key={index}>{character.character}</option>
                                    )
                                })}
                            </select>
                        </tr>
                    </td>
                    <td>
                        <tr><h2>詳細描述</h2></tr>
                        <tr>
                            <textarea name="" id="" ></textarea>
                        </tr>
                    </td>
                    <td>
                        <tr><h2>付費與否</h2></tr>
                    </td>
                </table>
                <button className='pd-10'>+</button>
            </div>
            <div>
                <h2>專案合作地點（可複選）</h2>
                <div className='df fl-wp'>
                    {locationList.map((location, index) => {
                        return(
                            <input type="checkbox" name={location.location} key={index} style={{width:'150px', color:'#fff'}} />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2>作品語言（可複選）左品尚無語言者不需勾選</h2>
                <div className='df fl-wp'>
                    {locationList.map((location, index) => {
                        return(
                            <input type="checkbox" name={location.location} key={index} style={{width:'150px', color:'#fff'}} />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2>合作專案內容描述</h2>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <h2>若此合作專案有製作中的作品，可按加號與此合作專案連結，可選擇數個單一作品或複合作品：</h2>
                <button>+</button>
            </div>
        </div>
        <div className='df jc-c aln-itm-c'>
            <button>儲存</button>
            <button>完成送出</button>
        </div>
    </div>
  )
}

export default AddProject