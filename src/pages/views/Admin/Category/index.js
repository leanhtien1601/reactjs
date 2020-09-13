import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Category = ({category,onRemoveCate,products}) => {
    const removeCate =(id)=>{
        onRemoveCate(id);
    }
    const checkLength =(id) =>{
        const newData = products.filter((cate)=>cate.id_cate ==id);
        console.log(newData)
        if(!newData){
            return ("0");
        }else{
            return newData.length
        }
    }
    return (
        <div>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form" >
                                <div className="input-group no-border">
                                    <input type="text" className="form-control"  placeholder="Search..." name="name"  />
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
                                        <th scope="col">Image</th>
                                        <th scope="col">Des</th>
                                        <th scope="col">Có products</th>
                                        <th scope="col">Action</th>
                                        {/* <th scope="col">Detail</th> */}
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map(({ id, nameCate, image,textAra,length}, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                               {nameCate}
                                            </td>
                                            <td>
                                                <img src={image} alt="" width="100" />
                                            </td>
                                            <td>
                                                {textAra}
                                            </td>
                                            <td>
                                                {checkLength(id)}
                                            </td>
                                            <td>
                                                <button className="btn btn-primary" 
                                                onClick={() => {if(window.confirm('Bạn có muốn xóa?')){removeCate(id)};}}
                                                >
                                                    Delete
                                                </button>
                                                <Link className="btn btn-success" to={'/admin/category/id/'+id}>
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr> 
                                     ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
