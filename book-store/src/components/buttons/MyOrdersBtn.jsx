import React from 'react'
import { NavLink } from 'react-router-dom'
const MyOrdersBtn = () => {
    return (
        <>
            <NavLink to="/myorders" className="btn btn-outline-primary ms-2">
                <span className="fa fa-history"></span> My Orders
            </NavLink>
        </>
    )
}

export default MyOrdersBtn;