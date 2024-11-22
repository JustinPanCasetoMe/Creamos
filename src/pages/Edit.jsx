import React, { useState } from 'react'
import { FaRegSmile } from "react-icons/fa";
import languageList from '../datas/language.json'
import characterList from '../datas/character.json'

const Edit = () => {

    const [recruitMemeberRow, setRecruitMemberRow] = useState(1)
    const [searchUserID, setSearchUserID] = useState(false)
    const [inputID, setInputID] = useState('')

    // State to track whether the "Paid" radio button is selected for each row
    const [radioStatus, setRadioStatus] = useState(
        // Initially all rows have "Unpaid" selected
        Array(recruitMemeberRow).fill(false)
    )

    const recruitRowIncrease = () => {
        setRecruitMemberRow( recruitMemeberRow + 1);
        // Add a new "Unpaid" statsu for the new row
        setRadioStatus([...radioStatus, false]);
    };

    const handleAddRole = () => {
        setSearchUserID(true)
    }

    const handleEnterKeyPress = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            recruitRowIncrease();
            setInputID('')
            console.log(inputID)
        }
    }


    return (
        <div>
            <div className='mg-b-30 df'>
                <div className='mg-r-30'>
                    <input type="radio" name="projectType" id="singleProject" className='mg-r-10'/>
                    <label htmlFor="singleProject">單一作品</label>
                </div>
                <div>
                    <input type="radio" name="projectType" id="complexProject" className='mg-r-10'/>
                    <label htmlFor="complexProject">複合作品</label>
                </div>
            </div>
            <div className='mg-b-30'>
                <h2 className='mg-b-10'>作品語言（可複選）作品尚無語言者不需勾選</h2>
                <div className='df fl-wp'>
                    {languageList.map((language, index) => {
                        return(
                            <div style={{width:'120px'}} key={index}>
                                <input
                                    type="checkbox"
                                    id={language.language}
                                    name={language.language}
                                    value={language.language}
                                    style={{color:'#fff', backgroundColor:'#fff'}}
                                    className='mg-r-10' />
                                <label htmlFor={language.language} className='fw'>{language.language}</label>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='mg-b-30'>
                <textarea name="" id="" placeholder='請在此輸入歌詞，限700字之內，中英文皆可' className='fw pd-10' style={{height:'150px'}}></textarea>
            </div>
            <div className='mg-b-10'>
                <h2>作品內容簡介</h2>
                <h4></h4>
            </div>
            <div className='mg-b-30 pd-10' style={{backgroundColor:'var(--greyBG-02)'}}>
                <table className='fw mg-b-20'>
                <thead>
                    <tr>
                        <th style={{width:'16%'}}><h2>參與者</h2></th>
                        <th style={{width:'16%'}}><h2>參與者角色</h2></th>
                        <th style={{width:'12%'}}><h2>角色種類</h2></th>
                        <th style={{width:'18%'}}><h2>作品部分描述</h2></th>
                        <th style={{width:'22%'}}><h2>連結單一作品（可不連結）</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({length: recruitMemeberRow}, (_, index) => index+1).map((item, index) => {
                        return(
                            <tr key={index}>
                                <th className='df aln-itm-c'>
                                    <FaRegSmile size={40} className='mg-r-20'/>
                                    <h4>用戶ID</h4>
                                </th>
                                <td className='pd-r-20'>
                                    <h4>參與角色：</h4>
                                    <select name="" id="" style={{height:'24px'}}>
                                        {characterList.map((character, index) => {
                                            return(
                                                <option value={character.character} key={index}>{character.character}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td className='pd-r-20'>
                                    <h4>角色種類：</h4>
                                    <select name="" id="" style={{height:'24px'}}>
                                        {characterList.map((character, index) => {
                                            return(
                                                <option value={character.character} key={index}>{character.character}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td className='pd-r-20'>
                                    <textarea name="" id="" style={{resize: 'vertical'}} className='fw pd-10' />
                                </td>
                                <td className='pd-r-20'>
                                    <button className='pd-10 mg-r-30'>+</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                <button className='pd-10 mg-r-30' onClick={handleAddRole}>+ Add new role</button>
                <input
                    type="text"
                    value={inputID}
                    placeholder='請輸入參與者的用戶ＩＤ'
                    className={`pd-10 ${searchUserID ? '' : 'dn'}`}
                    onChange={(e) => setInputID(e.target.value)}
                    onKeyDown={handleEnterKeyPress}
                />
            </div>
            <div className='df mg-b-30'>
                <h3>封面上傳處（若不上傳會用作品連結預設封面）</h3>
                <button className='pd-10 mg-r-30'>+</button>
            </div>
            <div className='df mg-b-30'>
                <input type="checkbox" id='policy' className='mg-r-30'/>
                <label htmlFor="policy">我聲明我擁有或獲得了本作品的版權許可，並有權在此嵌入本作品。我理解，若本作品侵犯他人版權或生法律責任，該責任將由我個人承擔，本網站不對此負責。</label>
            </div>
            <div className='df jc-c aln-itm-c'>
                <div className='df jc-sb' style={{width:'200px'}}>
                    <button>儲存</button>
                    <button>取消</button>
                </div>
            </div>
        </div>
    )
}

export default Edit