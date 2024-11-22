import React, { useState } from 'react'
import characterList from '../datas/character.json'
import locationList from '../datas/location.json'
import languageList from '../datas/language.json'

const AddProject = () => {

    const recruitMember = 1

    const [recruitMemeberRow, setRecruitMemberRow] = useState(1)

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

    const handleRoleChange = (event, rowIndex) => {
        console.log('radioStatus[',rowIndex , '] = ', radioStatus[rowIndex])
        // Update the state of the clicked radio button (true for "Paid", false for "Unpaid")
        const updateStatus = [...radioStatus];
        updateStatus[rowIndex] = event.target.value === 'Paid';
        setRadioStatus(updateStatus);
        // console.log(updateStatus)
    }

    return (
        <div>
            <div className='df aln-itm-c mg-b-30'>
                    <h2 className='mg-r-10'>合作專案名稱</h2>
                    <input type="text" style={{height:'24px', width:'200px'}} className=''/>
                </div>
            <div>
                {/* <div className='df aln-itm-c mg-b-30'>
                    <h2 className='mg-r-10'>徵集合作夥伴</h2>
                </div> */}
                <div className='mg-b-30 pd-10' style={{backgroundColor:'var(--greyBG-02)'}}>
                    <table className='fw mg-b-20'>
                        <thead>
                            <tr>
                                <th style={{width:'18%'}}><h2>徵集夥伴角色</h2></th>
                                <th style={{width:'16%'}}><h2>角色種類</h2></th>
                                <th style={{width:'18%'}}><h2>需求人數</h2></th>
                                <th style={{width:'18%'}}><h2>詳細描述</h2></th>
                                <th style={{width:'22%'}}><h2>付費與否</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({length: recruitMemeberRow}, (_, index) => index+1).map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <th>
                                            <h4>參與角色</h4>
                                            <select name="" id="" style={{height:'24px'}}>
                                                {characterList.map((character, index) => {
                                                    return(
                                                        <option value={character.character} key={index}>{character.character}</option>
                                                    )
                                                })}
                                            </select>
                                        </th>
                                        <td className='pd-r-20'>
                                            <h4>按參與角色跳不同種類</h4>
                                            <select name="" id="" style={{height:'24px'}}>
                                                {characterList.map((character, index) => {
                                                    return(
                                                        <option value={character.character} key={index}>{character.character}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                        <td className='pd-r-20'>
                                            <h4>所需人數</h4>
                                            <select name="" id="" style={{height:'24px'}}>
                                                {Array.from({length:10}, (_, index) => index+1).map((number, index) => {
                                                    return(
                                                        <option value={number} key={index}>{number}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                        <td className='pd-r-20'>
                                            <textarea name="" id="" style={{resize: 'vertical'}} className='fw pd-10' />
                                        </td>
                                        <td className='pd-r-20'>
                                            <form action="" className='pd-r-20 df aln-itm-c mg-b-10'>
                                                <div className='mg-r-20'>
                                                    <input
                                                        type="radio"
                                                        name={`role-${index}`}
                                                        id={`Unpaid-${index}`}
                                                        value='Unpaid'
                                                        className='mg-r-10'
                                                        checked={!radioStatus[index]}
                                                        onChange={(event) => handleRoleChange(event, index)}
                                                    />
                                                    <label htmlFor={`Unpaid-${index}`}>徵免費夥伴</label>
                                                </div>
                                                <div className='mg-r-20' >
                                                    <input
                                                        type="radio"
                                                        name={`role-${index}`}
                                                        id={`Paid-${index}`}
                                                        value='Paid'
                                                        className='mg-r-10'
                                                        checked={radioStatus[index]}
                                                        onChange={(event) => handleRoleChange(event, index)}
                                                    />
                                                    <label htmlFor={`Paid-${index}`}>付費給參與者</label>
                                                </div>
                                            </form>
                                            { radioStatus[index] && 
                                                <input 
                                                    type="text"
                                                    placeholder='填寫價格範圍'
                                                    style={{width:'300px', height:'30px'}}
                                                /> 
                                            }
                                            
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button className='pd-10' onClick={recruitRowIncrease}>+  Add new row</button>
                </div>

                {/* 選擇專案地點 */}
                <div className='mg-b-30'>
                    <h2 className='mg-b-10'>專案合作地點（可複選）</h2>
                    <div className='df fl-wp'>
                        {locationList.map((location, index) => {
                            return(
                                <div style={{width:'120px'}} key={index}>
                                    <input
                                        type="checkbox"
                                        id={location.location}
                                        name={location.location}
                                        value={location.location}
                                        style={{color:'#fff', backgroundColor:'#fff'}}
                                        className='mg-r-10' />
                                    <label htmlFor={location.location} className='fw'>{location.location}</label>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                {/* 選擇作品語言 */}
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

                {/* 填寫合作專案描述 */}
                <div className='mg-b-30'>
                    <h2 className='mg-b-10'>合作專案內容描述</h2>
                    <textarea name="" id="" className='fw pd-10' style={{height:'100px', resize:'vertical'}}></textarea>
                </div>

                {/* 按加號與此合作專案連結 */}
                <div className='df mg-b-30'>
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