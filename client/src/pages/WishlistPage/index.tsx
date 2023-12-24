import React from 'react'
import WishlistProducts from '../../components/WishlistPageControllers/WishlistProducts'
import { Helmet } from 'react-helmet-async'
import JustForYou from '../../components/WishlistPageControllers/JustForYou'

type Props = {}

const Wishlist = (props: Props) => {
    return (
        <main>
            <Helmet>
                <title>Wishlist Page</title>
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
            <WishlistProducts />
            <JustForYou />
        </main>
    )
}

export default Wishlist