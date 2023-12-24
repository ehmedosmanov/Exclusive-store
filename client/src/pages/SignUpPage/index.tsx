import React from 'react'
import { NavLink } from 'react-router-dom'
import AccImage from '../../assets/images/dl.beatsnoop 1.png'
import Button from '../../components/CommonComponents/Button'
type Props = {}

const SignUp = (props: Props) => {
    return (
        <main>
            <section id='sign-up' className=' pt-16 pb-36'>
                <div className="sign-up-content">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="lg:block flex justify-center account-image">
                            <img src={AccImage} alt="AccountImage" />
                        </div>
                        <div className="create-account flex flex-col justify-center px-12 xl:px-48 lg:px-24 md:px-24 py-12 md:py-0 text-left">
                            <div className="create-account-content pb-12 text-center">
                                <h3 className='text-2xl md:text-4xl'>Create an account</h3>
                                <p className='pl-2'>Enter your details below</p>
                            </div>
                            <div className="create-acc-form ">
                                <form className='flex gap-4 flex-col pb-6'>
                                    <div className="input-box border-b border-slate-600 py-2">
                                        <input type="text" placeholder='Name' className='outline-none' />
                                    </div>
                                    <div className="input-box border-b border-slate-600 py-2">
                                        <input type="text" placeholder='Email' className='outline-none' />
                                    </div>
                                    <div className="input-box border-b border-slate-600 py-2">
                                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Phone Number' className='outline-none' />
                                    </div>
                                    <div className="input-box border-b border-slate-600 py-2">
                                        <input type="text" placeholder='Password' className='outline-none' />
                                    </div>
                                </form>
                                <div className="sign-in-btns flex flex-col gap-4">
                                    <Button bgPrimary fullBtn>Create Account</Button>
                                    <button type="button" className="text-white w-full py-4  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                </div>
                                <div className="log-in flex justify-center gap-6 pt-4 items-center">
                                    <p>Already have account?</p>
                                    <NavLink to={'/SignIn'}>
                                        <button className='border-b-2 border-slate-800 pb-1 font-medium'>Log in</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUp