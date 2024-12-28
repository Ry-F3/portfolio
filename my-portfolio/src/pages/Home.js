import React from "react";
import Image from "../components/profile/ProfilePicture";
import Contact from "../components/profile/Contact";
import SkillBars from "../components/projects/SkillBars";
// Projects
import Ai from "../images/projects/ai-img.png";
import Oku from "../images/projects/oku.png";
import BorgLite from "../images/projects/borglite.png";
import Holdu from "../images/projects/holdu.png";
import DojiLite from "../images/projects/doji-lite.png";
import Black from "../images/projects/black.png";
import ProjectCard from "../components/projects/ProjectCard";

function Home() {
  const skills = {
    languages: [
      { language: "JavaScript", proficiency: 85, color: "#3498db" }, // light blue
      { language: "Python", proficiency: 70, color: "#2980b9" }, // medium blue
      { language: "C", proficiency: 65, color: "#1f648e" }, // darker blue
      { language: "HTML", proficiency: 95, color: "#5dade2" }, // soft blue
    ],
    frameworks: [
      { framework: "React", proficiency: 90, color: "#1f77b4" }, // blue (primary React color)
      { framework: "Django", proficiency: 75, color: "#21618c" }, // dark blue
      { framework: "Django Rest Framework", proficiency: 70, color: "#2471a3" }, // deep blue
      { framework: "Flask", proficiency: 65, color: "#85c1e9" }, // very light blue
    ],
    databases: [
      { database: "MySQL", proficiency: 75, color: "#5b9bd5" }, // light sky blue
      { database: "PostgreSQL", proficiency: 70, color: "#1b4f72" }, // dark navy blue
    ],
  };

  return (
    <div className="d-flex bg-light flex-column min-vh-100">
      <div className="container mt-2 flex-fill">
        {/* Main Content Section */}
        <div className="row">
          {/* Left Sidebar (Profile) */}
          <div
            className="col-12 col-md-3 mb-3 g-4 mb-md-0 bg-light border-bottom border-muted"
            style={{
              height: "fit-content", // this ensures that it maintains its height
            }}>
            <Image />
            <div className="p-3">
              <h4 className="text-left mb-3">Rhys Few</h4>
              <p className="text-left text-muted">
                Full Stack Developer <br />
                Passionate about coding and design.
              </p>
            </div>

            {/* Additional Information */}
            <div className="p-3 border-top">
              {/* <h5>My Coding Proficiency</h5> */}
              <SkillBars skills={skills} />
            </div>

            <div className="p-3 border-top">
              <Contact />
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
                  title="Ai.img"
                  description="Brief description of the project goes here."
                  link="https://ry-f3.github.io/ai-img/"
                  repo="https://github.com/Ry-F3/ai-img"
                />
                <ProjectCard
                  image={Oku}
                  title="Oku"
                  description="Brief description of the project goes here."
                  link="https://ry-f3.github.io/Oku/"
                  repo="https://github.com/Ry-F3/Oku"
                />
                <ProjectCard
                  image={BorgLite}
                  title="Borglite"
                  description="Brief description of the project goes here."
                  link="https://borglite.herokuapp.com/"
                  repo="https://github.com/Ry-F3/BorgLite"
                />
                <ProjectCard
                  image={Holdu}
                  title="Holdu"
                  description="Brief description of the project goes here."
                  link="https://hold-u-c52c62c74dca.herokuapp.com/"
                  repo="https://github.com/Ry-F3/holdu"
                />
                <ProjectCard
                  image={DojiLite}
                  title="Doji-lite"
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
