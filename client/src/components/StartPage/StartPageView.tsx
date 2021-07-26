import React from 'react';
import HeroSection from './Hero';
import MenuStart from './Menu';
import Tacos from './Tacos';

class StartPageView extends React.Component {
    render() {
        return (
            <>
                <HeroSection />
                <Tacos />
                <MenuStart />
            </>
        )
    }
}

export default StartPageView;