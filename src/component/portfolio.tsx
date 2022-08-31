import React from "react";
import blog1 from '../images/blog1.jpg'

const Portfolio = () => {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <h2 className="mb-5">My <span className="text-danger">Portfolio</span></h2>
                <div className="row">
                    <div className="blog-card">
                        <div className="img-holder">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="content-holder">
                            <h6 className="title">Bookshelf</h6>

                            <p className="post-details">
                                <a href="#">By: Kidung Ardana</a>
                                <a href="#"><i className="ti-heart text-danger"></i></a>
                                <a href="#"><i className="ti-comment"></i></a>
                            </p>

                            <p>This web is just to make you easier to remember the book that you've already done to read and not already done.</p>
                            <a href="https://github.com/P12inceKael/Bookshelf.git">Click here to test the web!</a>

                            
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    )
}

export default Portfolio;