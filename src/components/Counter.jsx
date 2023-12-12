import React from 'react';
import { useContext } from 'react';
import {CounterContext} from '../context/Counter.jsx';
function Counter(){
    const CounterContext12=useContext(CounterContext);
    return(
        <div>
            <button onClick={()=>CounterContext12.setcount(CounterContext12.count+1)}>increment</button>
            <button onClick={()=>CounterContext12.setcount(CounterContext12.count-1)}>decrement</button>
        </div>
    )
}
export default Counter;