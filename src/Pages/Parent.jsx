import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         name:"kapil"
    //     }
    // }
   
  render() {
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
       <h2>parent</h2> 
       <Child  name={"kapil"} data={data}/>
      </div>
    )
  }
}
