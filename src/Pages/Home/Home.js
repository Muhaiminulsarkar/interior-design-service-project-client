import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import ControlledCarousel from './ControlledCarousel';
import Firstsection from './Firstsection';
import Seconsection from './Seconsection';
import Threeservicecard from './Threeservicecard';

const Home = () => {

    useTitle('Home')
    return (
        <div className='container'>
            <ControlledCarousel></ControlledCarousel>
            <AboutSection></AboutSection>
            <Threeservicecard></Threeservicecard>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;