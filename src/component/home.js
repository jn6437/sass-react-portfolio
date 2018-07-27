
import React from "react";

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Jason <span className="text-secondary">Noh </span>
      </h1>
      <h2 className="sm-heading">Developer. Any.</h2>
      <div className="icons">
        <a href="https://www.facebook.com/noh.jasonhyunuk">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/jason-hyunuk-noh-89309b13b/">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/jn6437?tab=repositories">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      {/*}
      <div className="icons">
        <i className="fas fa-brush" />
  </div>*/}
    </main>
  );
};

export default Home;
