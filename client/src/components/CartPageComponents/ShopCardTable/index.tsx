import React from 'react'
import Button from '../../CommonComponents/Button';
import ShopCard from '../ShopCard';


type Props = {}

const ShopCardTable = (props: Props) => {

  return (
    <>
      <div className='shop-card-table overflow-x-auto '>
        <table className='w-full border'>
          <thead className='border-b'>
            <tr className='w-full'>
              <th className='px-6 py-8 font-medium flex items-center flex-wrap'>Product</th>
              <th className='px-6 py-8 font-medium'>Price</th>
              <th className='px-6 py-8 font-medium'>Quantity</th>
              <th className='px-6 py-8 font-medium'>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </tbody>
        </table >
      </div >
      <div className="card-btns flex-col gap-4 sm:flex-row flex justify-between mt-8">
        <Button bgPrimary>Return To Shop</Button>
        <Button bgPrimary>Update Cart</Button>
      </div>
    </>
  )
}

export default ShopCardTable