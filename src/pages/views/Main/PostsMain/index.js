import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PostsMain =  ({posts}) => {
   
    return (
        <div>
        {posts.map(({ id, namePost,content,date }, index) => (
        <div className="card">
        <div className="card-header">
         Ngày đăng : {date}
        </div>
        <div className="card-body">
        <h5 className="card-title">{namePost}</h5>
        <p className="card-text">{content}</p>
          <Link to={"/posts_"+id} className="btn btn-primary">Xem tiếp</Link>
        </div>
      </div>
      ))}
    </div>
    )
}

PostsMain.propTypes = {

}

export default PostsMain;
