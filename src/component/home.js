import React from "react";

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Jason <span className="text-secondary">Noh </span>
      </h1>
      <h2 className="sm-heading">Web Developer</h2>
      <div className="icons">
        <a href="#!">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;
