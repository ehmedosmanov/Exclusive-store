import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import './App.css'
import Main from './layout/Main'
import Home from './pages/HomePage'
import SignUp from './pages/SignUpPage'
import SignIn from './pages/SignInPage'
import CartPage from './pages/CartPage'
import Wishlist from './pages/WishlistPage'
import NotFound from './pages/NotFoundPage'
import Contact from './pages/ContactPage'
import ProductDetail from './pages/ProductDetailPage'
import About from './pages/AboutPage'

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
            <Route path='/Wishlist' element={<Wishlist />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/ProductDetail' element={<ProductDetail />} />
            <Route path='/About' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default App
