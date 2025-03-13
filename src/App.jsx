import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const App = () => {
  const name = "sumit";
  const data = [
    {
      column: "Column 1",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    {
      column: "Column 2",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    {
      column: "Column 3",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      para2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
  ];

  return (
    <div>
      <Home sumit={name} data={data} />
      <About />
      <Contact />
    </div>
  );
};

export default App;
