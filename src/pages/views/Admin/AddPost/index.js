import React from 'react'
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import moment from 'moment';

const AddPost = ({onAddPost}) => {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();
    const onHandSubmit = (data)=>{
        const Newdata ={
            id:Math.random().toString(36).substr(2,9),
            ...data,
            date:moment().format("DD-MM-YYYY hh:mm:ss")
        }
            onAddPost(Newdata);
            history.push("admin/post");
    };
    
    return (
        <div className="main-panel">
            <div className="card shadow ml-10">
                <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                    <div className="form-group row ml-2 mt-5">
                        <label htmlFor="" className="col-sm-2 col-form-label">
                            Name post
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                ref={register({
                                    required: true,
                                    minLength: 3,
                                    maxLength: 35,
                                    pattern: {
                                        value: /\S/,
                                    },
                                })}
                                name="namePost"
                            />
                        </div>

                        {errors.namePost && errors.namePost.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                        {errors.namePost && errors.namePost.type === "minLength" && <span className="text-danger">Bạn nhập ngắn hơn 3 kí tự</span>}
                        {errors.namePost && errors.namePost.type === "maxLength" && <span className="text-danger">Bạn nhập dài quá 35 kí tự</span>}
                        {errors.namePost && errors.namePost.type === "pattern" && <span className="text-danger">Nhập đi bạn đừng lươn</span>}
                    </div>
                   
                    <br></br>
                    <div className="form-group ml-4">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <input type="text"  className="form-control" name="content"
                         ref={register({
                                required: true,
                            })}/>
                     {errors.content && errors.content.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                       
                    </div>
                    {/* <div className="form-group ml-4">
                        <label htmlFor="exampleFormControlTextarea1">Date</label>
                        <input type="date"  className="form-control" name="date" ref={register}/>
                       
                    </div> */}
                    <div className="form-group ml-4">
                        <label htmlFor="exampleFormControlTextarea1">Dateil posts</label>
                        <textarea
                            className="form-control"
                            rows={8}
                            name="textAra"
                            ref={register({
                                required: true,
                            })}
                        />
                        {errors.textAra && errors.textAra.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                    </div>
                    
                   
                    <button className="btn btn-success ml-4">Add Post</button>
                </form>
            </div>
        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
