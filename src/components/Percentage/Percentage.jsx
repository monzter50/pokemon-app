import React from 'react';
const Percentage = ({percentage,text})=>{
    return(
        <div className="percentage-list">
            <label htmlFor="" className="label-bar">{text}</label>
            <p className={`circle percentage-${text}`}><span className="label-percentage">{percentage}%</span></p>
        </div>
    )
}
export default Percentage;