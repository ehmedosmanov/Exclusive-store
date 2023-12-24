import React from 'react'
import BillingDetail from '../../components/CheckOutComponents/BillingDetails'
import CheckOutContent from '../../components/CheckOutComponents/CheckOutContent'

type Props = {}

const CheckOut = (props: Props) => {
    return (
        <main>
            <section className='py-[100px]'>
                <div className="wrapper">
                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                        <BillingDetail />
                        <CheckOutContent />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CheckOut