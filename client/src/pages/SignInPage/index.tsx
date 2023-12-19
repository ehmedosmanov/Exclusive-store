import React from 'react'
import { NavLink } from 'react-router-dom'
import AccImage from '../../assets/images/dl.beatsnoop 1.png'
import Button from '../../components/CommonComponents/Button'

type Props = {}

const SignIn = (props: Props) => {
    return (
        <section id='sign-in' className=' pt-16 pb-36'>
            <div className="sign-in-content">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="lg:block flex justify-center account-image">
                        <img src={AccImage} alt="AccountImage" />
                    </div>
                    <div className="create-account flex flex-col justify-center px-12 xl:px-48 lg:px-24 md:px-24 py-12 md:py-0 text-left">
                        <div className="create-account-content pb-12 text-center">
                            <h3 className='text-2xl md:text-4xl pb-4 font-semibold'>Log in to Exclusive</h3>
                            <p className='pl-2'>Enter your details below</p>
                        </div>
                        <div className="create-acc-form ">
                            <form className='flex gap-14 flex-col pb-6'>
                                <div className="input-box border-b border-slate-600 py-2">
                                    <input type="text" placeholder='Email' className='outline-none' />
                                </div>
                                <div className="input-box border-b border-slate-600 py-2">
                                    <input type="text" placeholder='Password' className='outline-none' />
                                </div>
                            </form>
                            <div className="sign-in-btns flex justify-between pt-6 gap-4">
                                <Button bgPrimary>Log In</Button>
                                <button className="relative transition-all duration-300 group font-medium text-primary">
                                    Forget Password?
                                    <span className="absolute top-[45px] left-0 h-px w-0 transition-all duration-300 bg-primary group-hover:w-full"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn