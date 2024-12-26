import React from "react";
import Image from "../components/profile/ProfilePicture";
import Ai from "../images/projects/ai-img.png";
import Oku from "../images/projects/oku.png";
import BorgLite from "../images/projects/borglite.png";
import Holdu from "../images/projects/holdu.png";
import TraderTribe from "../images/projects/trade.png";
import DojiLite from "../images/projects/doji-lite.png";
import Black from "../images/projects/black.png";
import ProjectCard from "../components/projects/ProjectCard";

function Home() {
  return (
    <div className="d-flex bg-light flex-column min-vh-100">
      <div className="container mt-2 flex-fill">
        {/* Main Content Section */}
        <div className="row">
          {/* Left Sidebar (Profile) */}
          <div
            className="col-12 col-md-3 mb-3 g-4 mb-md-0 bg-light border-bottom border-muted"
            style={{
              height: "fit-content",
            }}>
            <Image />
            <div className="p-3">
              <h4 className="text-left mb-3">Rhys Few</h4>
              <p className="text-left text-muted">
                Full Stack Developer <br />
                Passionate about coding and design.
              </p>
            </div>
          </div>

          {/* Right Content Area (Projects) */}
          <div className="col-12 col-md-9">
            <div className="p-4 rounded bg-light">
              <h4 className="text-left text-muted mb-4">
                &lt; my_projects /&gt;
              </h4>
              <div className="row row-cols-md-2 row-cols-sm-1 row-cols-lg-2 row-cols-xl-3">
                {/* Project Cards */}
                <ProjectCard
                  image={Ai}
                  title="Project: ai.img"
                  description="Brief description of the project goes here."
                  link="https://ry-f3.github.io/ai-img/"
                  repo="https://github.com/Ry-F3/ai-img"
                />
                <ProjectCard
                  image={Oku}
                  title="Project: oku"
                  description="Brief description of the project goes here."
                  link="https://ry-f3.github.io/Oku/"
                  repo="https://github.com/Ry-F3/Oku"
                />
                <ProjectCard
                  image={BorgLite}
                  title="Project: borglite"
                  description="Brief description of the project goes here."
                  link="https://borglite.herokuapp.com/"
                  repo="https://github.com/Ry-F3/BorgLite"
                />
                <ProjectCard
                  image={Holdu}
                  title="Project: holdu"
                  description="Brief description of the project goes here."
                  link="https://hold-u-c52c62c74dca.herokuapp.com/"
                  repo="https://github.com/Ry-F3/holdu"
                />
                <ProjectCard
                  image={DojiLite}
                  title="Project: doji-lite"
                  description="Brief description of the project goes here."
                  link="https://dashboard.heroku.com/apps/doji-lite"
                  repo="https://github.com/Ry-F3/doji-lite-v2"
                />
                <ProjectCard
                  image={Black}
                  title="Project 6"
                  description="Brief description of the project goes here."
                  link="#"
                  disabled={true}
                />
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
