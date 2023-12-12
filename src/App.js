import React from 'react';
import Counter from './components/Counter.jsx'
import { useContext } from 'react';
import { CounterContext } from './context/Counter.jsx';
function App(){
    const counterState=useContext(CounterContext);
    return(
        <div>
            <h1>value is {counterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}
export default App;