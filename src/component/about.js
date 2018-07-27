import React from "react";

const About = () => {
    return (
        <div>
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me </span>
                </h1>
                <h2 className="sm-heading">Let me tell you a few things...</h2>
                <div className="about-info">
                    <img src="img/profile.png" alt="Jason Noh" className="bio-image" />
                    <div className="bio">
                        <h3 class="text-secondary"> BIO</h3>
                        <p>lorem30 </p>
                    </div>

                    <div className="job job-1">
                        <h3>123</h3>
                        <h6></h6>
                        <p>lorem30</p>
                    </div>
                    <div className="job job-2">
                        <h3>123</h3>
                        <h6></h6>
                        <p>lorem30</p>
                    </div>
                    <div className="job job-3">
                        <h3>123</h3>

                        <p>lorem30</p>
                    </div>
                </div>
            </main>
            <footer id="main-footer">
                Copyright &copy; 2018
    </footer>
        </div>
    );
};

export default About;