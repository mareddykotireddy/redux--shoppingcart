import React from 'react'

import { useState } from 'react';
import { connect } from 'react-redux';
import ProductDetails from '../containers/ProductDetail';
import { AddProduct } from '../redux/actions/productActions';
// import { RemoveProduct } from '../redux/actions/productActions';

const Cart = ({ Products, AddProduct}) => {
    const [item, setItem] = useState("");
    const submitHandler = async e => {
        e.preventDefault();
        if (item !== "") {
            await AddProduct({ name: item });
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Add Products" value={item} onChange={e => setItem(e.target.value)} /> <br />
                        <button type="submit" className="btn btn-success">
                            Add Product
                        </button>
                    </form>

                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) => ({
    products: state
})


export default connect(mapStateToProps, { AddProduct })(Cart)
