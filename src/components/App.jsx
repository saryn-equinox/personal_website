import React, {useState} from "react";
import Home from "./Home"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Article from "./Article";

let App = props => {
    return (<Router>       
        <NavigationBar
            brandName={props.brandName}
            mottoContent = {props.mottoContent}
            navBarItems = {props.navBarItems}
            position="sticky-top"
            type="header"
        />
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" >
                <Blog blogGenre={props.blogGenre} />
            </Route>
            <Route path="/article" component={Article} />
            <Route path="/" >
                <Home greetingContent={props.greetingContent} imgSrc={props.imgSrc} />
            </Route>            
        </Switch>    
        <Footer 
            bg={props.bg} 
            variant={props.variant} 
            footer={props.footer}
            footerMotto={props.footerMotto} />
    </Router>)
}

export default App;