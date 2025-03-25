import React from 'react'
// import './Module.css'
// import Style from './sumit.module.css'
import styled from 'styled-components'
const Modules = () => {
    const HeaderText=styled.h2`
    color:red;
    `
    
  return (
    <div>
        <HeaderText>lorem3</HeaderText>
        <p className={Style['para-sumit']}>Lorem, ipsum dolor.</p>
        <p className={Style.text}>Lorem, ipsum dolor.</p>

      {/* <p style={{backgroundColor:'rebeccapurple',color:'white',padding:'10px',borderRadius:'10px'}}>Lorem, ipsum dolor.</p>
      <p className='para'>Lorem, ipsum dolor.</p> */}

    </div>
  )
}

export default Modules
