import React, { useState } from 'react';
import { createContext } from 'react';
export const CounterContext=createContext(null);
export const CounterProvider=(props)=>{
    const[count,setcount]=useState(0);
    return(
        <CounterContext.Provider value={{count,setcount}}>
            {props.children}
        </CounterContext.Provider>
    )
}