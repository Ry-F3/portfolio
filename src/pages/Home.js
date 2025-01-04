import React, { useState, useEffect } from "react";
import { FaSort } from "react-icons/fa"; // Import the icon
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

// Utility function to truncate description text to a max of 100 words
const truncateDescription = (text, wordLimit = 100) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

function Home() {
  // Use state to track if cards are sorted or unsorted
  const [isSorted, setIsSorted] = useState(true);

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

  const [projects, setProjects] = useState([
    {
      image: Ai,
      title: "Ai.img",
      description:
        "A project exploring AI's impact on marketing, creativity, and careers, revealing opportunities and how AI reshapes industries and the future of work.",
      link: "https://ry-f3.github.io/ai-img/",
      repo: "https://github.com/Ry-F3/ai-img",
      techStack: ["HTML5", "CSS", "GitHub Pages"],
      lastUpdated: null,
    },
    {
      image: Oku,
      title: "Oku",
      description:
        "A custom-designed calculator to assist in trading and technical analysis. It helps users set achievable price targets, making market decisions more informed.",
      link: "https://ry-f3.github.io/Oku/",
      repo: "https://github.com/Ry-F3/Oku",
      techStack: ["HTML5", "CSS", "JavaScript"],
      lastUpdated: null,
    },
    {
      image: BorgLite,
      title: "Borglite",
      description:
        "A retro, text-based game inspired by Star Trek, where players crack a hacking mini-game and aim to dominate the galaxy by assimilating planets.",
      link: "https://borglite.herokuapp.com/",
      repo: "https://github.com/Ry-F3/BorgLite",
      techStack: ["Python", "Heroku"],
      lastUpdated: null,
    },
    {
      image: Holdu,
      title: "Holdu",
      description:
        "A job platform connecting employers and employees using a rating system. Built from the experience of recognizing a gap in efficient worker-job matchmaking.",
      link: "https://hold-u-c52c62c74dca.herokuapp.com/",
      repo: "https://github.com/Ry-F3/holdu",
      techStack: ["Django REST", "Python", "React", "Heroku", "ElephantSQL"],
      lastUpdated: null,
    },
    {
      image: DojiLite,
      title: "Doji-lite",
      description:
        "An automated tool for downloading trading data from Blofin Exchange, utilizing a trade-matching algorithm powered by Redis cloud for efficiency.",
      link: "https://dashboard.heroku.com/apps/doji-lite",
      repo: "https://github.com/Ry-F3/doji-lite-v2",
      techStack: ["React", "Redis Cloud", "Django Rest", "Python"],
      lastUpdated: null,
    },
  ]);

  useEffect(() => {
    const fetchLastUpdatedDates = async () => {
      // Check if there's cached data in localStorage
      const cachedData = localStorage.getItem("projectLastUpdated");
      const cacheTimestamp = localStorage.getItem("cacheTimestamp");
      const now = Date.now();

      if (
        cachedData &&
        cacheTimestamp &&
        now - cacheTimestamp < 30 * 60 * 1000
      ) {
        // Use cached data if it's still valid
        setProjects(JSON.parse(cachedData));
        return;
      }

      // Fetch data from GitHub
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (!project.repo) return project;

          try {
            const match = project.repo.match(/github\.com\/([^/]+)\/([^/]+)/);
            if (match) {
              const [_, owner, repoName] = match;
              const response = await fetch(
                `https://api.github.com/repos/${owner}/${repoName}`
              );
              const data = await response.json();
              return {
                ...project,
                lastUpdated: data.updated_at
                  ? new Date(data.updated_at).toLocaleDateString()
                  : "--/--/----", // Fallback to default date if no update date is available
              };
            }
          } catch (error) {
            console.error(
              `Failed to fetch last updated for ${project.title}`,
              error
            );
          }

          return {
            ...project,
            lastUpdated: "--/--/----", // Default value for projects without repo or on fetch failure
          };
        })
      );

      // Save updated projects to state and cache
      setProjects(updatedProjects);
      localStorage.setItem(
        "projectLastUpdated",
        JSON.stringify(updatedProjects)
      );
      localStorage.setItem("cacheTimestamp", now.toString());
    };

    fetchLastUpdatedDates();
  }, []);

  const sortedProjects = isSorted
    ? [...projects].reverse((a, b) => {
        const dateA = a.lastUpdated ? new Date(a.lastUpdated) : new Date(0);
        const dateB = b.lastUpdated ? new Date(b.lastUpdated) : new Date(0);
        return dateB - dateA;
      })
    : projects;

  console.log(
    "Updated Projects:",
    projects.map((project) => project.lastUpdated)
  );

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
              <SkillBars skills={skills} />
            </div>

            <div className="p-3 border-top">
              <Contact />
            </div>
          </div>

          {/* Right Content Area (Projects) */}
          <div className="col-12 col-md-9">
            <div className="p-4 rounded bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-left text-muted mb-4">
                  &lt; my_projects /&gt;
                </h4>
                <button
                  onClick={() => setIsSorted((prev) => !prev)}
                  className="btn btn-outline-primary mb-4">
                  <FaSort /> {/* Display sort icon */}
                  {isSorted} {/* Text to toggle */}
                </button>
              </div>

              {/* Sort Toggle Button */}

              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
                {sortedProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={truncateDescription(project.description)}
                    link={project.link}
                    repo={project.repo}
                    techStack={project.techStack}
                    lastUpdated={project.lastUpdated || "--/--/----"}
                  />
                ))}

                {projects.length % 4 !== 0 &&
                  Array.from({ length: 4 - (projects.length % 4) }).map(
                    (_, index) => (
                      <ProjectCard
                        key={`dummy-${index}`}
                        image={Black}
                        title="Placeholder"
                        description="This is a placeholder card."
                        link="#"
                        disabled={true}
                      />
                    )
                  )}
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
