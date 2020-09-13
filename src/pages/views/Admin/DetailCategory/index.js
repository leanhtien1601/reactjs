import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const DetailCategory = ({ category, onUpdateCate }) => {
    const { id } = useParams();
    const cate = id ? category.find((cate) => cate.id == id) : {};
    const [valueInput, setValueInput] = useState(cate);
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
        if(!data.image[0]){
            onUpdateCate(id, valueInput);
            history.push("/admin/category");
        }else{
            let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    image: url,
                };
                onUpdateCate(id, newData);
                history.push("/admin/category");
                alert("Update thành công");
            });
        });
        }
        
    };
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input
                                                    defaultValue={valueInput.nameCate || ""}
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                    name="nameCate"
                                                    type="text"
                                                    onChange={onHandleChange}
                                                ></input>
                                                {errors.nameCate && errors.nameCate.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                                            </td>

                                            <td>
                                                <img src={cate.image} width="100"></img>
                                                <br></br>
                                                <br></br>
                                                <input
                                                    // defaultValue={valueInput.imageCate || ""}
                                                    ref={register}
                                                    border="0px"
                                                    type="file"
                                                    name="image"
                                                    onChange={onHandleChange}
                                                ></input>
                                            </td>

                                            <td></td>
                                            <td>
                                                <button className="btn btn-primary">Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mô tả danh mục</label>
                                    <textarea className="form-control" rows={3} onChange={onHandleChange} defaultValue={valueInput.textAra || ""} ref={register} name="textAra" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DetailCategory.propTypes = {};

export default DetailCategory;
