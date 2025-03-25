import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Parent from "./Pages/Parent";
import CounterReducer from "./Pages/CounterReducer";
import FormReducer from "./Pages/FormReducer";
import Modules from "./Pages/Modules";
import Cards from "./Pages/Cards";
const App = () => {
  const name = "sumit";
  const data = [
    {
      column: "Column 1",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    {
      column: "Column 2",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    {
      column: "Column 3",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
  ];
const arr = [1,2,3,4,5,6,7,8,9,10]
const arr1 ={name:""}
let name1 =""
 const sum = arr.reduce((acc,item,i,arr)=> acc+item,0)
 console.log(sum);


 
  return (
    <div>
      <Cards />
    </div>
  );
};

export default App;
