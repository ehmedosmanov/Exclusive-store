import React from 'react'
import SectionTitle from '../../CommonComponents/SectionTitle'
import './index.scss'
//Images
import Ps5Cover from '../../../assets/images/ps5.jpeg'
import PS5 from '../../../assets/images/ps5-slim-goedkope-playstation_large 1.png'
import Woman from '../../../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png'
import Speakers from '../../../assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import Parfume from '../../../assets/images/652e82cd70aa6522dd785109a455904c.png'
type Props = {}

const Features = (props: Props) => {
    return (
        <section id='features'>
            <div className="wrapper">
                <SectionTitle title='Featured' subtitle='New Arrival' />
                <div className="features-content">
                    <div className="grid-container parent">
                        <div className="feature-first feature group relative top-0 bottom-0 overflow-hidden">
                            <div className="feature-image px-7 object-cover pt-20 transition duration-700 group-hover:scale-110">
                                <img src={PS5} alt="PlayStation5" className=' object-cover' />
                            </div>
                            <div className="feature-content absolute bottom-0 pl-6 pb-6 text-white ">
                                <h4 className='font-semibold text-2xl'>PlayStation 5</h4>
                                <p className=' text-sm py-4 w-[60%]'>
                                    Black and White version of the PS5 coming out on sale.
                                </p>
                                <button className="relative transition-all duration-300 group font-medium">
                                    Shop Now
                                    <span className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 bg-white group-hover:w-full"></span>
                                </button>
                            </div>
                        </div>
                        <div className="group feature-second feature relative top-0 bottom-0 w-full h-full overflow-hidden">
                            <div className="feature-image absolute top-0  object-cover transition duration-700 group-hover:scale-125">
                                <img src={'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$'} alt="Woman" className='  w-full  object-cover' />
                            </div>
                            <div className="feature-content absolute bottom-0 pl-6 pb-6 text-white ">
                                <h4 className='font-semibold text-2xl'>PlayStation 5</h4>
                                <p className=' text-sm py-4 w-[60%]'>
                                    Black and White version of the PS5 coming out on sale.
                                </p>
                                <button className='shop-btn font-medium'>Shop Now</button>
                            </div>
                        </div>
                        <div className="group feature-third flex items-center justify-center feature relative top-0 bottom-0  w-full h-full overflow-hidden">
                            <div className="feature-image object-cover absolute top-0 bottom-0 flex items-center justify-center transition duration-700 group-hover:scale-125">
                                <img src={Speakers} alt="Speakers" className=' object-cover' />
                            </div>
                            <div className="feature-content absolute bottom-0 pl-6 pb-6 text-white ">
                                <h4 className='font-semibold text-2xl'>Speakers</h4>
                                <p className=' text-sm py-4 w-[60%]'>
                                    Amazon wireless speakers
                                </p>
                                <button className='shop-btn font-medium'>Shop Now</button>
                            </div>
                        </div>
                        <div className=" feature-fourth flex group items-center justify-center feature relative top-0 bottom-0  w-full h-full overflow-hidden">
                            <div className="feature-image object-cover absolute top-0 bottom-0 flex items-center transition duration-700 group-hover:scale-125 justify-center">
                                <img src={Parfume} alt="Parfume" className=' object-cover' />
                            </div>
                            <div className="feature-content absolute bottom-0 pl-6 pb-6 text-white ">
                                <h4 className='font-semibold text-2xl'>Speakers</h4>
                                <p className=' text-sm py-4 w-[60%]'>
                                    Amazon wireless speakers
                                </p>
                                <button className='shop-btn font-medium'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features