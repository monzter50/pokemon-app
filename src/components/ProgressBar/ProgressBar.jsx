import React from 'react';
const ProgressBar = ({percentage,text})=>{
    return(
        <div className="progress-bar">
            <label htmlFor="" className="label-bar">{text}</label>
            <span className={`bar progress-${text}`} style={{width:`${percentage}%`}}></span>
        </div>
    )
}
export default ProgressBar;