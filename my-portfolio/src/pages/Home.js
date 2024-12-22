import React from "react";
import Image from "../components/profile/ProfilePicture"
import Ai from "../images/projects/ai-img.png"
import Oku from "../images/projects/oku.png"
import BorgLite from "../images/projects/borglite.png"
import Holdu from "../images/projects/holdu.png"
import TraderTribe from "../images/projects/trade.png"
import ProjectCard from "../components/portfolio/ProjectCard";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-3 flex-fill">
        {/* Main Content Section */}
        <div className="d-flex">
          {/* Left Sidebar */}
          <div
            className="bg-light rounded p-1"
            style={{
              width: "300px",
              top: "10px",
              height: "fit-content",
            }}
          >

            <Image/>
            <h4 className="text-left">Rhys Few</h4>
            <p className="text-left text-muted">
              Full Stack Developer <br />
              Passionate about coding and design.
            </p>
          </div>

          {/* Right Content Area */}
          {/* Right Content Area */}
          <div className="flex-fill mt-4 ms-4">
            {/* Outer Box */}
            <div className="p-4 rounded bg-light">
              <h3 className="text-left text-muted mb-4">&lt; my_projects /&gt;</h3>
              <div className="row">
                {/* Project 1 */}
                <ProjectCard
                  image={Ai}
                  title="Project 1"
                  description="Brief description of the project goes here."
                  link="#"
                />

                {/* Project 2 */}
                <ProjectCard
                  image={Oku}
                  title="Project 2"
                  description="Brief description of the project goes here."
                  link="#"
                />

                {/* Project 3 */}
                <ProjectCard
                  image={BorgLite}
                  title="Project 3"
                  description="Brief description of the project goes here."
                  link="#"
                />
                  {/* Project 4 */}
                  <ProjectCard
                  image={Holdu}
                  title="Project 4"
                  description="Brief description of the project goes here."
                  link="#"
                />
                  {/* Project 5 */}
                  <ProjectCard
                  image={TraderTribe}
                  title="Project 5"
                  description="Brief description of the project goes here."
                  link="#"
                />
                  {/* Project 6 */}
                  <ProjectCard
                  image={BorgLite}
                  title="Project 6"
                  description="Brief description of the project goes here."
                  link="#"
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
