import React from 'react';
import NavigationBar from "./NavigationBar"
import Greeting from "./Greeting"
import Layout from "./Layout"
import * as Constants from "../constants"

let App = () => {
    return (<div>
        <NavigationBar 
            sticky="top" 
            bg={Constants.NavBG} 
            variant={Constants.NavBG}
            brand={Constants.brandName}
            brandSize="2rem" 
            items={Constants.NavBarItems}
            brandFontFamily={Constants.brandFontFamily}
            hasMoto = {true}
        />
        <Greeting content={Constants.greetingContent} id="homeHeader" />
        <Layout imgSrc={Constants.imgSrc} />
        <NavigationBar bg={Constants.NavBG} variant={Constants.NavBG} items={Constants.footer} />
    </div>);                
};

export default App;