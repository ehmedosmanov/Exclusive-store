import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
