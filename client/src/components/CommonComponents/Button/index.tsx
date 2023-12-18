import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    bgPrimary?: boolean,
    bgSuccess?: boolean,
}

const Button = ({ children, bgPrimary, bgSuccess }: Props) => {
    const bgPrimaryClass = bgPrimary ? 'bg-primary hover:bg-red-400' : ''
    const bgSuccesClass = bgSuccess ? 'bg-success hover:bg-green-500' : ''
    return (
        <button className={`outline-none border-none ${bgPrimaryClass || bgSuccesClass} transition duration-200 rounded-md text-white lg:py-4 lg:px-12 py-2 px-8 lg:text-base md:text-[14px] text-[12px]`}>
            {children}
        </button>
    )
}

export default Button