import React from "react";
import { Link } from "react-router-dom";

// import {Link} from 'react-router-dom'
const Header = (CartItem) => {
 
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KOTI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            {/* <i className="fa-solid fa-cart-shopping" ></i> */}
                            {/* <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {this.props.numberCart}</Link></li> */}
                           
                            <div className="nav-cart">
          <span>0</span>

        </div>
                            <div className="cart">
          <Link to="/cart" className='cart'>
            <i className="fa-solid fa-cart-shopping" ></i>
            <span className='cart-length'>
                                {CartItem.length === 0 ? "" : CartItem.length}
                            </span>
          </Link>
        </div>
        

                        </form><br/>

                    </div>
                </div>
            </nav>

            {/* className="ui fixed menu">
            <div className="container">
                     <h2>Shopping</h2>

             </div> */}
        </div>
    )
};
export default Header;

