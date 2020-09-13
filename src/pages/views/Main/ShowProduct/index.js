import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const ShowProduct = ({ products, category }) => {
    let { id } = useParams();

   

    return (
        <div className="product">
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                   {category.map(({ id, nameCate}, index) => (
                       <li className="nav-item">
                           <Link className="nav-link" to={"category_"+id}>{nameCate}</Link>
                       </li>                                                                      
                       ))}
                   </ul>
               </div>
           </nav>
       
        <div className="row" style={{ paddingTop: "50px" }}>
            
           {products.map((product,index)=>{
               if(product.id_cate == id){
                 return (
                 <div className="col-md-3">
                 <div className="card" style={{ width: "100%", height: "440px", border: "none", textAlign: "center" }}>
                     <img src={product.image} style={{ height: "280px" }} className="card-img-top" alt="..." />
                     <div className="card-body">
                         <p className="card-text" style={{ color: "red" }}>
                             <span style={{ textDecoration: "line-through", color: "#000", paddingRight: "15px" }}>{product.price}</span>
                             {product.priceSale} VNĐ
                         </p>
                         <hr />
                         <button type="button" className="btn btn-outline-primary" style={{ marginBottom: "10px" }}>
                             <Link to={"/product_" + product.id} style={{ textDecoration: "none" }}>
                                 Mua ngay
                             </Link>
                         </button>
                     </div>
                 </div>
             </div>) 
               }
           })}
        </div>    
          </div>   
       
    )

    }
ShowProduct.propTypes = {

}

export default ShowProduct
