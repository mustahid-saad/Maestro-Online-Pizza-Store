import React from 'react';

const Menu = () => {
    return (
        <div className="about">
            <div className="container">
               <div className="row">
                    <div className="col-6">
                       <div className="about__img">
                            <img src="../img/pizza.jpg" alt="pizza"/>
                       </div>
                       
                    </div>
                   <div className="col-6 padding" >
                        <h3>Pizza Menu</h3>
                            <h1>CHICAGO THIN CRUST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum dolore, corporis obcaecati quo quasi reiciendis voluptatibus! Ea voluptas, animi nostrum distinctio saepe hic sit optio accusantium autem nihil ad.</p>
                            <div className="about__btn">
                                <a className="btn btn-smart" href="">VIEW MORE</a>
                            </div>
                   </div>
                   
               </div>
            </div>
            
        </div>
    );
};

export default Menu;