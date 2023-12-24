import React from 'react'
import { MdOutlineHomeRepairService, MdAttachMoney, MdOutlineShoppingBasket } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import Statistic from '../Statistic';

type Props = {}

const OurStatistics = (props: Props) => {
    return (
        <section id='statistics' className='pb-[170px] pt-[70px]'>
            <div className="wrapper">
                <div className="our-statistics grid grid-cols-12 gap-10">
                    <Statistic icon={<MdOutlineHomeRepairService />} price={'10.5k'} subtitle={'Sallers active our site'} />
                    <Statistic icon={<MdAttachMoney />} price={'33k'} subtitle={'Mopnthly Produduct Sale'} />
                    <Statistic icon={<MdOutlineShoppingBasket />} price={'45.5k'} subtitle={'Customer active in our site'} />
                    <Statistic icon={<TbMoneybag />} price={'25.5k'} subtitle={'Anual gross sale in our site'} />
                </div>
            </div>
        </section>
    )
}

export default OurStatistics