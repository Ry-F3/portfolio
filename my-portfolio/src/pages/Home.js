import React from "react";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        {/* Header Section */}
        <header className="text-center mb-4">
          <h1 className="display-4">&lt; Rhys Few /&gt;</h1>
          <p className="lead">Software Developer Porfolio</p>
        </header>

        {/* Grid Layout Section */}
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <img
                src="https://via.placeholder.com/500"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  A short description about myself goes here. This is a simple,
                  responsive layout.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-6">
            <div className="card">
              <img
                src="https://via.placeholder.com/500"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">My Projects</h5>
                <p className="card-text">
                  Here are some of my latest projects. Check out what I've been
                  working on.
                </p>
                <a href="#" className="btn btn-primary">
                  See Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-light text-center py-3 mt-auto">
        <p>&copy; 2024 Rhys Few. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
