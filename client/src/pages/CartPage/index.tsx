import React from 'react'
import ShopCardTable from '../../components/CartPageComponents/ShopCardTable'
import CardTotal from '../../components/CartPageComponents/CardTotal'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <main id='cart-page'>
      <div className="wrapper">
        <section id='shop-card' className='py-[100px]'>
          <ShopCardTable />
          <CardTotal />
        </section>
      </div>
    </main>
  )
}

export default CartPage