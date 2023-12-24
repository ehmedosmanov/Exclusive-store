import React from 'react'
import { Helmet } from 'react-helmet-async'
import CallUs from '../../components/ContactPageComponents/CallUs/intex'
import ContactForm from '../../components/ContactPageComponents/ContactForm'

type Props = {}

const Contact = (props: Props) => {
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
            <section id='contact' className='py-[100px]'>
                <div className="wrapper">
                    <div className="contact-content">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <CallUs />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact