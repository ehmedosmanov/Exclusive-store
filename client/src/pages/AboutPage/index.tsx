import React from 'react'
import OurStory from '../../components/AboutComponents/OurStory'
import OurStatistics from '../../components/AboutComponents/OurStatistics'
import OurEmployees from '../../components/AboutComponents/OurEmployees'
import Services from '../../components/HomePageComponents/ServicesComponents'

type Props = {}

const About = (props: Props) => {
    return (
        <main>
            <OurStory />
            <OurStatistics />
            <OurEmployees />
            <Services />
        </main>
    )
}

export default About