import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data';
import { add } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Books = () => {
    const dispatch = useDispatch();
    const cardItem = (item) => {
        const handleAdd = (item) => {
            dispatch(add(item));
        };

        return (
            <div class="card my-5 py-4" key={item.id} style={{ width: "12rem" }}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="lead"><b>PRICE:</b> ${item.price}</p>
                    <NavLink to={`/products/${item.id}`} >Book Description</NavLink>
                    <hr />
                    {/* <NavLink to={`/buynow/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>                                                                                */}
                    <button onClick={() => handleAdd(item)} class="btn btn-outline-primary" >Buy now </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Books</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Books;