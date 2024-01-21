import React from 'react'
import "./App.css";
import { Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import View from './Pages/View';
function App() {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/view' element={<View />} />
    </Routes>
    </div>
  )
}

export default App
