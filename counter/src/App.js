import React, { useState } from "react"

    



export default function Counter (){
    const[count,setCount] = useState(0);

    const handleChangeIncremnt = ()=>{
        setCount((count)=>count+1)
    }

    const handleChangeDecrement = ()=>{
        setCount((count)=>count-1)
    }

    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={handleChangeIncremnt}>Increment</button>
            <button onClick={handleChangeDecrement}>Decrement</button>
        </div>
    )
}
