import{ useState } from "react";

function Counter(){
  const[count , setcount] = useState(0);

  function increase(){
    setcount(count + 1);
  }

  function decrease(){
    setcount(count - 1);
  }

  function reset(){
    setcount(0);
  }

  return(
      <div className="box">
        <h1>counter : {count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
        
      </div>
  )
}
export default Counter;