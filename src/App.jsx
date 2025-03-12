import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
const App = () => {
  const name = 'sumit'

  
  
  return (
    <div>
      <Home sumit={name}/>
      <About  />
      <Contact />
    </div>
  )
}

export default App
