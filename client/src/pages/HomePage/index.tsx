import React from 'react'
import Hero from '../../components/HomePageComponents/HeroComponents'
import FlashSales from '../../components/HomePageComponents/FlashSalesComponents'
import Categories from '../../components/HomePageComponents/CategoriesComponents'
import BestSelling from '../../components/HomePageComponents/BestSellingComponents'
import MainProduct from '../../components/HomePageComponents/MainProductComponents'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MainProduct />
    </main>
  )
}

export default Home