import React from 'react';

export default function Todo({val,delId,delFunc}){
    return <span><p>{val}</p> <button onClick={()=>delFunc(delId)}>Delete</button></span>
}
