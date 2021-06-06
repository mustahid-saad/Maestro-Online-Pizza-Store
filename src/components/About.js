import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="container">
               <div className="row">
                   <div className="col-6 padding" >
                        <h3>About Us</h3>
                            <h1>WELCOME TO MAESTRO PIZZINI</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum dolore, corporis obcaecati quo quasi reiciendis voluptatibus! Ea voluptas, animi nostrum distinctio saepe hic sit optio accusantium autem nihil ad.</p>
                            <div className="about__btn">
                                <a className="btn btn-smart" href="">READ MORE</a>
                            </div>
                   </div>
                   <div className="col-6">
                       <div className="about__img">
                            <img src="../img/pizza.jpg" alt="pizza"/>
                       </div>
                       
                   </div>
               </div>
            </div>
            
        </div>
    );
};

export default About;