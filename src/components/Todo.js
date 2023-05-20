import React from 'react';
import "../styles.css";
export default function Todo({val,delId,delFunc}){
    return <div className='item'><p>{val}</p> <button onClick={()=>delFunc(delId)}>Delete</button></div>
}
