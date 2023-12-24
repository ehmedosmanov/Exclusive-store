import React from 'react'
import { Helmet } from 'react-helmet-async'
import DetailImages from '../../components/DetailPageComponents/DetailImages'
import DetailContent from '../../components/DetailPageComponents/DetailContent'
import RelatedItem from '../../components/DetailPageComponents/RelatedItem'

type Props = {}

const ProductDetail = (props: Props) => {
    return (
        <main>
            <Helmet>
                <title>Contact</title>
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
            <section id='product-detail' className='py-[100px] pb-10'>
                <div className="wrapper">
                    <div className="product grid items-center grid-cols-1 lg:grid-cols-2 gap-16  lg:gap-20 xl:gap-16">
                        <DetailImages />
                        <DetailContent />
                    </div>
                </div>
            </section>
            <RelatedItem />
        </main>
    )
}

export default ProductDetail