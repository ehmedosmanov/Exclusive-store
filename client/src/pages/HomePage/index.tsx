import React from 'react'
import Hero from '../../components/HomePageComponents/HeroComponents'
import FlashSales from '../../components/HomePageComponents/FlashSalesComponents'
import Categories from '../../components/HomePageComponents/CategoriesComponents'
import BestSelling from '../../components/HomePageComponents/BestSellingComponents'
import MainProduct from '../../components/HomePageComponents/MainProductComponents'
import OurProducts from '../../components/HomePageComponents/OurProductsComponents'
import { Helmet } from 'react-helmet-async'
import Features from '../../components/HomePageComponents/FeaturesComponents'
import Services from '../../components/HomePageComponents/ServicesComponents'

type Props = {}

const Home = (props: Props) => {
  return (
    <main>
      <Helmet>
        <title>Exclusive — Ecommerce electronics web stire</title>
        <meta name="title" content="Exclusive — Ecommerce electronics web stire" />
        <meta name="description" content="React + TypeScript Project" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Exclusive — Ecommerce electronics web stire" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Exclusive — Ecommerce electronics web stire" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Helmet>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MainProduct />
      <OurProducts />
      <Features />
      <Services />
    </main>
  )
}

export default Home