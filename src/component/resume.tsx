import React from "react";

const Resume = () => {
    return (
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Expertise</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <hr />
                                <h6 className="title text-danger">2020 - Present</h6>
                                <p>Front-end Developer</p>
                                <p className="subtitle">I'm not highly knowledgeable in this area, but I am still exploring it.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Education</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2019 - Present</h6>
                                <p>Bina Nusantara University</p>
                                <p className="subtitle">Majoring in Computer Science and expected to be Bachelor in 2023. Activist of Bersama Dalam Musik to create and also publish several articles for knowledgde other student. Participating to be a committee for event.</p>
                                <hr />
                                <h6 className="title text-danger">2016 - 2019</h6>
                                <p>SMA Negeri 1 Cilegon</p>
                                <p className="subtitle">Mathematics and Natural Science</p>
                                <hr />
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>HTML &amp; CSS</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" ></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" ></div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Languages</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>Indonesia</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" ></div>
                                </div>
                                <h6>English</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" ></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;