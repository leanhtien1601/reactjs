import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import parse from 'html-react-parser';
 
// CommonJS


const Product = ({ products ,category }) => {
    // console.log(products)
    // const onCheckShow = (id) =>{
    //     checkShow(id)
        
    // }
    // const onConvert =(desc)=>{
    //     // console.log(desc);
    //     if(!desc){
    //         return desc;
    //     } else{
    //         return parse(desc);
    //     }}
    // const parse = require('html-react-parser');        
    //     }
    // }
    return (

        <div className="product">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {category.map(({ id, nameCate}, index) => (
                        <li className="nav-item">
                            <Link className="nav-link" to={`category_${id}`}>{nameCate}</Link>
                        </li>                                                                      
                        ))}
                    </ul>
                </div>
            </nav>
            <br />
            <h3>Sản Phẩm mới</h3>
            <div className="row" style={{ paddingTop: "50px" }}>
                {products.map(({ id, image, price, priceSale }) => (
                    <div className="col-md-3">
                        <div className="card" style={{ width: "100%", height: "440px", border: "none", textAlign: "center" }}>
                            <img src={image} style={{ height: "280px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text" style={{ color: "red" }}>
                                    <span style={{ textDecoration: "line-through", color: "#000", paddingRight: "15px" }}>{price}</span>
                                    {priceSale} VNĐ
                                </p>
                {/* <p>{onConvert(desc)}</p> */}
                                <hr />
                                <button type="button" className="btn btn-outline-primary" style={{ marginBottom: "10px" }}>
                                    <Link to={`/product_${id}`} style={{ textDecoration: "none" }}>
                                        Mua ngay
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};

Product.propTypes = {};

export default Product;
