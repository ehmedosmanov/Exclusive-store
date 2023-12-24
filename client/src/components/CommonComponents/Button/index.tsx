import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    bgPrimary?: boolean,
    bgSuccess?: boolean,
    bgOutline?: boolean
    fullBtn?: boolean
}

const Button = ({ children, bgPrimary, bgSuccess, bgOutline, fullBtn }: Props) => {
    const bgPrimaryClass = bgPrimary ? 'bg-primary hover:bg-red-400 focus:ring-primary/50 text-white  border-none' : ''
    const bgSuccesClass = bgSuccess ? 'bg-success hover:bg-green-500 focus:ring-success/50 text-white  border-none' : ''
    const outlineClass = bgOutline ? 'border-slate-500 hover:bg-black duration-300 transition-all hover:text-white text-black border border-slate-400' : ''
    const fullBtnClass = fullBtn ? 'w-full' : ''
    return (
        <button className={`outline-none ${outlineClass || bgPrimaryClass || bgSuccesClass} transition focus:ring-4 focus:outline-none  ${fullBtnClass} duration-200 rounded-md lg:py-4 lg:px-12 py-2 px-8 lg:text-base md:text-[14px] text-[12px]`}>
            {children}
        </button>
    )
}

export default Button