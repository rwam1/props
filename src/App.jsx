import React, { useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [data,setData] =useState('hello')
  // const [show, setShow] = useState(false);
  // const [input ,setInput] =useState('')
  // console.log(input);
  const handleText =(data)=>{
setData(data)
  }
  return (
    <div>
      {data}
      <Contact handleText={handleText}/>
      {/* {show === false ? "no data" : "show data"}
      <button onClick={() => setShow(!show)}>toggel</button> */}
      {/* <input type="text" name="name" onChange={(e)=>setInput(e.target.value)} /> */}
    </div>
  );
};

export default App;
