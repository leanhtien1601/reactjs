import React from 'react'
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

const DetailPost = ({posts}) => {
    let { id } = useParams();
    console.log(id)
   const post = posts.find((post) => post.id ==id);
   console.log(post)
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {post.namePost}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{post.content}</p>
                <footer className="blockquote-footer">{post.textAra}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

DetailPost.propTypes = {

}

export default DetailPost
