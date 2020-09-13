import React from "react";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import Navbar from "../../components/Main/NavBar";
import '../../pages/asset/font_icon/css/all.css';

// import Home from "../views/Main/Home";
// import Product from "../../components/Main/Product";

// 
export default ({children }) => {
    // console.log("render Main");
        // console.log(Products)
    return (      
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-md-auto">
                        <Navbar />
                    </div>
                    <div className="col-xl-10 col-md-auto">
                        <div className="banner">
                            <Header />  
                            {/* <Product/> */}
                             <div className="content">{children}</div>
                            {/* <Home/> */}
                          
                        </div>
                    </div>                  
                    <Footer />
                </div>
            </div>
        
    );
};
