import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import { Editor } from '@tinymce/tinymce-react';

const DetailProduct = ({ products, onUpdate, category }) => {
    // console.log(products);
    const { id } = useParams();
    
    const product = id?products.find((product) => product.id === id):{};
    const [valueInput, setValueInput] = useState(product);
    const { handleSubmit, register, errors } = useForm();
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValueInput({
            ...valueInput,
            [name]: value,
        });
    };
    const history = useHistory();
    const onHandleSubmit = (data) => {
        if (!data.image[0]) {
            const newData = {
                ...valueInput, desc              
            };
            onUpdate(id, newData);
            history.push("/admin/products");
        } else {
            let file = data.image[0];
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    console.log(url);
                    // Tạo object mới chứa toàn bộ thông tin từ input

                    const newData = {
                        ...data, desc,
                        image: url,
                    };
                    console.log(newData);
                    // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                    onUpdate(id, newData);
                    history.push("/admin/products");
                });
            });
        }
    };
    const textEditor = product.desc;
    const [desc, setDesc] = useState(textEditor);
   
    const handleEditorChange = (content) => {
        // const content = editor.getData();
        setDesc(content);
        // console.log(desc);
    }

    return (
        <div>
            <div className="main-panel">
                <div className="card shadow ml-10">
                    <div className="card-body">
                        <div className="table-responsive">
                            <form onSubmit={handleSubmit(onHandleSubmit)}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">image</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Price Sale</th>

                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input
                                                    defaultValue={valueInput.name}
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                    name="name"
                                                    type="text"
                                                    onChange={onHandleChange}
                                                ></input>
                                                {errors.name && errors.name.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                                            </td>

                                            <td>
                                                <img src={product.image} width="100"></img>
                                                <br></br>
                                                <br></br>
                                                <input
                                                    className="form-control"
                                                    //  defaultValue={valueInput.image || ""}
                                                    ref={register}
                                                    border="0px"
                                                    type="file"
                                                    name="image"
                                                    onChange={onHandleChange}
                                                ></input>
                                            </td>
                                            <td>
                                                <input
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                    onChange={onHandleChange}
                                                    defaultValue={valueInput.price}
                                                    name="price"
                                                ></input>
                                                {errors.price && errors.price.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                                            </td>

                                            <td>
                                                <input
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                    onChange={onHandleChange}
                                                    defaultValue={valueInput.priceSale}
                                                    name="priceSale"
                                                ></input>
                                                {errors.priceSale && errors.priceSale.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                                            </td>
                                            <td>
                                                <button className="btn btn-primary">Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="form-group form-check ml-4">
                                    <input type="radio" name="status" ref={register} onChange={onHandleChange} defaultValue="Còn hàng" width="50px" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Còn hàng
                                    </label>
                                </div>
                                <div className="form-group form-check ml-4">
                                    <input type="radio" name="status" ref={register} onChange={onHandleChange} defaultValue="Hết hàng" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Hết hàng
                                    </label>
                                </div>
                                <label htmlFor="" className="col-sm-2 col-form-label">
                                    Danh mục
                                </label>
                                <select className="form-control ml-4" name="id_cate" ref={register} onChange={onHandleChange}>
                                    <option value={0}>Choose Category</option>
                                    {category.map(({ id, nameCate }) => (
                                        <option value={id}>{nameCate}</option>
                                    ))}
                                </select>
                                <div className="form-group ml-2">
                                    <label htmlFor="exampleFormControlTextarea1">Mô tả sản phẩm</label>
                                    <textarea className="form-control" rows={3} onChange={onHandleChange} defaultValue={valueInput.textAra || ""} name="textAra" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                                    <Editor  value={textEditor}  
                                        init={{
                                            height: 500,
                                           
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor |  image link\
                                                alignleft aligncenter alignright alignjustify | \
                                                 bullist numlist outdent indent | removeformat | help',
                                        }}
                                        onEditorChange={handleEditorChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DetailProduct.propTypes = {};

export default DetailProduct;
