import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Detail = ({ products }) => {
    console.log(products)
    let { id } = useParams();
     console.log(id)
    const product = products.find((product) => product.id === id);
    // console.log(product)
    
 const onConvert =(desc)=>{
        // console.log(text);
        // if(!text){
        //     return text;
        // } else{
           
            return  parse(desc);
        // }
    }
    const parse = require('html-react-parser');  
    
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb mt-10">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Detail
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Product
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      id_{product.id}
                    </li>
                </ol>
            </nav>
          
               
               <div > 
            <div className="row mt-4">
                
                <div className="col-6">
                    <img src={product.image} alt="" width="450px" height="auto" />
                </div>
                <div className="col-6">
                    <a href>
                        <h1 className="badge badge-danger">Tên sản phẩm </h1>
                        <h4>{product.name}</h4>
                    </a>
                    <h3 className="badge badge-success">Giá tiền </h3>
                    <h4>{product.price} VNĐ</h4>
                    <h3 className="badge badge-warning">Tình trạng  </h3>
                    <h4>{product.status}</h4>
                    <h3 className="badge badge-dark">Size shop có :</h3>
                    <h5></h5>
                   
                    <p></p>
                    <i className="fa fa-award">
                        <span style={{ paddingLeft: "15px" }}>Cam kết chất lượng</span>
                    </i>
                    <br />
                    <i className="fas fa-check-circle">
                        <span style={{ paddingLeft: "15px" }}>Đổi trả miễn phí 30 ngày</span>
                    </i>
                    <br />
                    <i className="fas fa-angle-double-right">
                        <span style={{ paddingLeft: "15px" }}>Phục vụ tận tình</span>
                    </i>{" "}
                    <br />
                    <br></br>
                    <button type="button" className="btn btn-outline-success ">
                        Mua ngay
                    </button>
                    <a href="">
                        <button type="button" className="btn btn-outline-danger">
                            Thêm vào giỏ hàng
                        </button>
                    </a>
                </div>
                <div className="form-group ml-2">
                <label htmlFor="exampleFormControlTextarea1">Content</label>
                {/* <textarea className="form-control" id="exampleFormControlTextarea1"
                
                value={textAra} rows={3}  /> */}
                <br></br>
                {product.textAra}
            </div>
           
           
            </div>
             <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                {onConvert(product.desc)}
            </div>
            </div>
           
        </div>
    );
    
};

Detail.propTypes = {};

export default Detail;
