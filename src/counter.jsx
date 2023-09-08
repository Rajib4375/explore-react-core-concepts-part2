import { useState } from "react"

export default function Counter(){
    const [count, setcount] = useState(0);

    const handelAdd = () =>{
        const newCount = count + 1;
        setcount(newCount)
    }
    const handelReduce = () =>{
        const newCount = count -1;
        setcount(newCount)
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter:{count} </h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}