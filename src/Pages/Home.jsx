import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = (props) => {
  const { sumit, data } = props;
  // console.log(data);   
  const [name,setName] =useState(0)

// console.log(name);

  return (
    <div>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page {sumit}</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div className="container mt-5">
        <button className="btn info" onClick={()=>setName("sumit")}>change name</button>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-sm-4">
                <h3>{item.column}</h3>
                <p>{item.para1}</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
            );
          })}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
