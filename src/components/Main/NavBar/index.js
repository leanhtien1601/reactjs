import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const  Navbar = ()=> {
  return (
    <div className="menu">
      <img src="image/01.jpg" className="logo" alt="" />
      <div className="icon_menu">
        <a href=""><i className="far fa-user-circle fa-lg" /></a>
        <a href=""><i className="fas fa-search fa-lg" /></a>
        <a href=""><i className="fas fa-cart-plus fa-lg" /></a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Link to="/">TRANG CHỦ</Link></li>
        <li className="list-group-item"><Link to="/product">SẢN PHẨM</Link> </li>
        <li className="list-group-item"><Link to="/posts">TIN TỨC</Link> </li>
        <li className="list-group-item"><Link to="/admin">Admin</Link></li>
        <li className="list-group-item"><Link to="/about">GIỚI THIỆU</Link></li>
       
       
      </ul>
    </div>
  )
}
Navbar.propTypes = {

}
export default Navbar