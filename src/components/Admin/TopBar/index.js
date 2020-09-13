import React from 'react'
import PropTypes from 'prop-types'

const Topbar = props => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                </div>
            </form>
            {/* Topbar Navbar */}
            
        </nav>
    )
}

Topbar.propTypes = {

}

export default Topbar
