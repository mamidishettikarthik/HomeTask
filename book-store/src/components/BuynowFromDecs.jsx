import React from 'react'
import { NavLink } from 'react-router-dom';

const Books = (props) => {
    return (
        <NavLink to={`/buynow/${props.value.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
    )
}

export default Books