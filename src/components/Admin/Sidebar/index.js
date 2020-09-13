import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo"><a href="" className="simple-text logo-normal">
        Creative
          </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active ">
            <Link className="nav-link" to="/admin">
              <i className="material-icons">home</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/product/add">
              <i className="material-icons">person</i>
              <p>Add Product</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/products">
              <i className="material-icons">Product</i>
              <p>List Products</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/category/add">
              <i className="material-icons">dashboard</i>
              <p>Add Category</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/category">
              <i className="material-icons">Category</i>
              <p>List Category</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/post/add">
              <i className="material-icons">dashboard</i>
              <p>Add Post</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/post">
              <i className="material-icons">Post</i>
              <p>List Post</p>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar
