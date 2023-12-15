import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'
import { Link } from 'react-router-dom';
import '../styles/Result.css';
import './toppers.css';
import video from './congratulations.gif.crdownload';
export default function Toppers() {

    const [data, setData] = useState([])
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/toppers`, (res) => {
            setData(res)
        })
    })
    

    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
     history.go(1);
   };

      
  return (
    <body className='bd'>
    <div className='widthadj ' >
    <img src={video} alt="loading..." />

        <table >
            <thead className='table-header1'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body1' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
        <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
    </body>
  )
}