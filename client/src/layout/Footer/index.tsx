import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";


const Footer = () => {
  return (
    <footer id='footer' className='bg-black pt-20 text-white'>
      <div className="wrapper">
        <div className="footer-content pb-16">
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-24">
            <div className="footer-item">
              <h3 className='text-white text-2xl font-bold'>Exclusive</h3>
              <p className=' py-6  text-xl font-medium'>Subscribe</p>
              <p className='font-normal pb-5'>Get 10% off your first order</p>
              <div className=" inline-block  search-box relative top-0 bottom-0">
                <input type="text" placeholder='Enter Your Email' className='py-3 px-4 bg-black focus:text-white duration-300 transition-all rounded-sm border-slate-500  border-2' />
                <span className='text-3xl cursor-pointer text-white absolute right-3 top-1/2 transform -translate-y-1/2'>
                  <LuSendHorizonal />
                </span>
              </div>
            </div>
            <div className="footer-item">
              <h3 className='text-white text-xl font-semibold'>Support</h3>
              <p className=' py-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p className='font-normal pb-5'>exclusive@gmail.com</p>
              <span>
                +88015-88888-9999
              </span>
            </div>
            <div className="footer-item">
              <h3 className='text-white text-xl font-semibold'>Account</h3>
              <p className=' py-6'>My Account</p>
              <p className='font-normal pb-5'>Login / Register</p>
              <p className='font-normal pb-5'>Cart</p>
              <p className='font-normal pb-5'>Wishlist</p>
              <p className='font-normal'>Shop</p>
            </div>
            <div className="footer-item">
              <h3 className='text-white text-xl font-semibold'>Quick Link</h3>
              <p className=' py-6'>Privacy Policy</p>
              <p className='font-normal pb-5'>Terms Of Use</p>
              <p className='font-normal pb-5'>FAQ</p>
              <p className='font-normal pb-5'>Contact</p>
            </div>
            <div className="footer-item">
              <h3 className='text-white text-xl font-semibold'>Download App</h3>
              <p className=' py-6'>Save $3 with App New User Only</p>
            </div>
          </div>
        </div>

      </div>
      <div className="copyright pt-4 pb-6 text-slate-500 text-center border-t border-slate-600">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer