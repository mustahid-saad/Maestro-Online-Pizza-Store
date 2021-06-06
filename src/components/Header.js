import React from 'react';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className="banner">
            <Navbar></Navbar>
            <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nulla sapiente molestias quo, amet eaque!
                        </p>
                        <div className="banner__btn">
                            <a className="btn btn-smart" href="">DELIVERY NOW</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;