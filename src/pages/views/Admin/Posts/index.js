import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Posts = ({ posts, onRemovePost }) => {
    const removePost = (id) => {
        onRemovePost(id);
    }
    return (
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
                                    <th scope="col">Content</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ id, namePost, content, date }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {namePost}
                                        </td>

                                        <td>{content}</td>
                                        <td>{date}</td>
                                        <td>
                                            <Link className="btn btn-success" to={`/admin/posts/id/${id}`}>
                                                Edit
                                                </Link>
                                            <button className="btn btn-primary" onClick={() => {if(window.confirm('Bạn có muốn xóa?')){removePost(id)}}}>
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
    )
}

Posts.propTypes = {

}

export default Posts
