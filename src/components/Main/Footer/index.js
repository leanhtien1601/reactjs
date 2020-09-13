import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2020</span>
                </div>
            </div>
        </footer>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
