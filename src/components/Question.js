import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const Question = ({item}) => {
    const {title,info}=item
    const [showData, setDhowData] = useState(false)

    return (
        <>
            <li type="none">
                <span className="question">{title}</span>
                <button 
                className="btn"
                onClick={() => setDhowData(!showData)}>{showData?<CiCircleMinus size={30}/>:<CiCirclePlus size={30}/>
                }</button>
                {showData && <p>{info}</p>}
            </li>
        </>
    )
}
export default Question;