import React from "react";
import TestSumit from "./Pages/TestSumit";
import Table from "./Pages/Table";
import Button from "./components/Button";

const App = () => {
const element = <>hi sumit</>
const obj = {name:"nikhil",pincode:"4354"}
const {name} =obj
console.log("old",obj);
const obj1 = {city:"nikhil",address:"4354"}

  let newObj = Object.assign({},obj,obj1)

  // console.log("new",newObj);
console.log("new",obj);
  

  
  return (
    <div>
      <Button className=""/>
      {element}
      <ul>
        <li>
          <ol>
            <li></li>
          </ol>
        </li>
      </ul>
      <Table />
      {/* <Cards  /> */}
    </div>
  );
};

export default App;
