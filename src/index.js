import ReactDOM from 'react-dom';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Constants from "./constants"
import App from "./components/App"

ReactDOM.render(<App
                bg={Constants.NavBG} 
                variant={Constants.NavBG}
                mottoContent={Constants.mottoContent}
                greetingContent={Constants.greetingContent}
                imgSrc={Constants.imgSrc}
                footer={Constants.footerContent}
                footerMotto={Constants.footerMotto}
                navBarItems = {Constants.navBarItems}
                brandName={Constants.brandName}
                blogGenre={Constants.blogGenre} />, document.getElementById("root"));

