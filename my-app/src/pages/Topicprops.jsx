import { useState } from "react";

function Topicprops(){
    const[val , setval] = useState("")
    const getval = (e)=>{
         
        let result = e.target.value
        setval(result)
    }
    const[text , setText] = useState("")
    const showtext =()=>{
         setText(val);
    }
    const resetall=()=>{
      setval("");
      setText("");
    }

    return(
        <>
        <h1>{val}</h1>
        <input type="text" placeholder="enter value" onChange={getval} />
        <button onClick={showtext}>click me</button>
        <button onClick={resetall}>reset me</button>
        </>
    )
}
export default Topicprops ;