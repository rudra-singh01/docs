// import React from 'react'

import { Route, Routes,  } from "react-router-dom"
import Home from './pages/Home'
import BlankDocument from "./components/BlankDocument"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="new-document" element={<BlankDocument/>}/>
      </Routes>
    </div>
  )
}

export default App
