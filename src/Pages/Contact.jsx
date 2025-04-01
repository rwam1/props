import React from 'react'
import Navbar from './Navbar'

const Contact = ({handleText}) => {
  return (
    <div>
        Contact Page
     <button onClick={()=>handleText("hello sumit")}>click me</button>
    </div>
  )
}

export default Contact
