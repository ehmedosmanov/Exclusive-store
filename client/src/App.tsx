import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import './App.css'
import Main from './layout/Main'
import Home from './pages/HomePage'
import SignUp from './pages/SignUpPage'
import SignIn from './pages/SignInPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Cart' element={<CartPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App
