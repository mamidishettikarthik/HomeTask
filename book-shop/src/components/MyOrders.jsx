import React from 'react'
import MyOrdersData from '../MyOrdersData';
const MyOrders = () => {
    const cardItem = (item) => {
        return (
            <div>
                <div className='container'>
                    <div class="list-group">
                        <a href="/#" class="list-group-item list-group-item-action flex-column align-items-start active">
                            <div class="d-flex w-100 justify-content-between">
                                <small class="mb-1"><b>Order Placed:</b> {item.orderDate}</small>
                                <small><b>Status:</b> {item.status}</small>
                            </div>
                            <hr />
                            <div class="container-fluid">
                                <div class="row" >
                                    <div class="col-sm-4">
                                        <img src={item.img} height={"200px"} alt="Book1" />
                                    </div>

                                    <div class="col-sm-7" style={{ paddingTop: `40px`, fontSize: `20px` }}>
                                        <span><b>Book Title: </b>{item.title} </span><br />
                                        <span><b>Author Name: </b>{item.author} </span><br />
                                        <span><b>Book Price: </b>${item.price} </span><br />
                                    </div>
                                </div>
                            </div>
                        </a>
                        <hr />
                    </div>

                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-around">
                    {MyOrdersData.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default MyOrders;