import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditPost = ({ posts, onUpdatePost }) => {
    const { id } = useParams();
    const post = id?posts.find((po) => po.id === id) : {};
    const [valueInput, setValueInput] = useState(post);
    const { handleSubmit, register, errors } = useForm();
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValueInput({
            ...valueInput,
            [name]: value,
        });
    };
    const history = useHistory();
    const onHandleSubmit = () => {
        onUpdatePost(id, valueInput);
        history.push("/admin/post");
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
                                                    defaultValue={valueInput.namePost || ""}
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                    name="namePost"
                                                    type="text"
                                                    onChange={onHandleChange}
                                                ></input>
                                                {errors.namePost && errors.namePost.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                                            </td>

                                            <td>
                                                {/* <img src={po.image} width="100"></img> */}
                                                
                                               
                                                <input  className="form-control"
                                                    defaultValue={valueInput.content || ""}
                                                    ref={register}
                                                    border="0px"
                                                    type="text"
                                                    name="content"
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
                                    <textarea className="form-control" rows={15} onChange={onHandleChange} defaultValue={valueInput.textAra || ""} ref={register} name="textAra" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

EditPost.propTypes = {};

export default EditPost;
