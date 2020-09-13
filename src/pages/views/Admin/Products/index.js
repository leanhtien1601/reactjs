import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProductsManager = ({ products, onRemove ,category}) => {
    // console.log(products);
    const removeHandle = (id) => {
        onRemove(id);
    };
    // const [product,setProduct] = useState({});
    const onHandleCheck = (id_cate)=>{
      
         const newpost = category.filter((cate)=>cate.id ===id_cate);
        if(newpost!=0){                   
            const id_cate = newpost[0].nameCate;
            return id_cate;
        } else{
            return id_cate=0;
            
        }
      
    }    
    return (
        <div>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form" >
                                <div className="input-group no-border">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="card shadow ml-10">
                    {/* <div className="card-header card-header-primary"></div> */}
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>

                                        <th scope="col">Categories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(({ id, name, image, price, status, id_cate }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                <Link to={"product/id/" + id}>{name}</Link>
                                            </td>
                                            <td>
                                                <img src={image} alt="" width="100" />
                                            </td>
                                            <td>{price}</td>
                                            <td>{status}</td>

                                            <td>{onHandleCheck(id_cate)}</td>
                                            <td>
                                                <Link className="btn btn-success" to={"product/id/" + id}>
                                                    Edit
                                                </Link>
                                                <button className="btn btn-primary" onClick={() => {if(window.confirm('Bạn có muốn xóa?')){removeHandle(id)}}}>
                                                    Delete
                                                </button>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductsManager.propTypes = {};

export default ProductsManager;
