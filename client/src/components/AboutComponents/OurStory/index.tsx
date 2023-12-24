import React from 'react'
import Cover from '../../../assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
type Props = {}

const OurStory = (props: Props) => {
    return (
        <section id='our-story' className='py-[100px]'>
            <div className="wrapper">
                <div className="our-story-content grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="story flex justify-center items-center flex-col text-center md:block md:text-left">
                        <h2 className=' text-6xl font-semibold'>
                            Our Story
                        </h2>
                        <p className='w-10/12 pb-6 pt-10 text-xs lg:text-base'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='w-10/12 text-xs lg:text-base'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="cover">
                        <img src={Cover} alt="portrait" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory