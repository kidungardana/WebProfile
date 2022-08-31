import React from "react";

const About = () => {
    return (
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card" style={{ paddingTop: "150px"}}>
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">Front End Developer</h5>
                    <p className="mt-20">I am a third-year student majoring in Computer Science at Bina Nusantara University who focused on Front End Engineer, familiar with C++, HTML, CSS and Javascript.</p>
                    <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
                </div>
                <div className="col-lg-4 about-card" style={{ paddingTop: "150px"}}>
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 11/04/2001</li>
                        <li><span>Email</span> : vincentius.ardana@gmail.com / kidung.ardana@binus.ac.id</li>
                        <li><span>Phone</span> : +(62) 81247161187</li>
                        <li><span>LinkedIn</span> : linkedin.com/in/kidung-ardana</li>
                        <li><span>Address</span> :  Pondok Cilegon Indah Blok C 76 no 15D Serang, Banten</li>
                    </ul>
                    <ul className="social-icons pt-3" style={{ paddingTop: "150px"}}>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                
            </div>
        </div>

    )
}

export default About;