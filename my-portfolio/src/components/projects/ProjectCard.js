import React, { useEffect, useState } from "react";
import Project from "../../styles/projects/Projects.module.css"; // Ensure to import the updated styles
import { FaCode, FaSitemap, FaRegClipboard } from "react-icons/fa"; // Import FaSitemap for the tech stack icon and FaRegClipboard for pen and paper

function ProjectCard({
  image,
  title,
  description,
  link,
  repo,
  disabled,
  techStack,
}) {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isExpanded, setIsExpanced] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false); // New state to toggle between description and tech stack

  const lineBarClasses = [
    Project.LineBarLong,
    Project.LineBarMedium,
    Project.LineBarLong,
    Project.LineBarMedium,
  ];

  const cardStyle = disabled ? Project.OpacityNeg : Project.OpacityPositive;
  const imageClass = disabled ? Project.PictureCardNeg : Project.PictureCardPositive;

  const toggleReadMore = () => setIsExpanced(!isExpanded);

  const toggleTechStack = () => setShowTechStack(!showTechStack); // Toggle tech stack visibility

  const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  useEffect(() => {
    if (repo) {
      const match = repo.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        const [_, owner, repoName] = match;

        fetch(`https://api.github.com/repos/${owner}/${repoName}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.updated_at) {
              const date = new Date(data.updated_at);
              setLastUpdated(date.toLocaleDateString());
            }
          })
          .catch((error) =>
            console.error("Failed to fetch GitHub data", error)
          );
      }
    }
  }, [repo]);

  const handleMouseLeave = () => {
    setIsExpanced(false); // Reset text expansion
    setShowTechStack(false); // Reset tech stack toggle
  };

  return (
    <div className="d-flex">
      <div
        className={`card mb-3 w-100 ${cardStyle} ${Project.Card}`}
        onMouseLeave={handleMouseLeave} // Reset state on mouse leave
      >
        <img
          src={image}
          className={`img-fluid ${imageClass} ${Project.CardImg}`}
          alt={title}
        />
        <div className={`card-body d-flex flex-column justify-content-between ${Project.CardBody}`}>
          {disabled ? (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              <div className={`${Project.LineBarShort} mb-2`}></div>
              <div>
                {lineBarClasses.map((lineBarClass, index) => (
                  <div key={index} className={`${lineBarClass} mb-2`}></div>
                ))}
              </div>
              <div className={`${Project.PlaceHolderBtn} mt-3`}></div>
            </div>
          ) : (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              <div className="rounded bg-light p-1 mb-3 flex-grow-">
                <h5 className={`card-title ${Project.CardTitle}`}>{title}</h5>
                {lastUpdated && (
                  <p className="text-muted">Last updated: {lastUpdated}</p>
                )}
                <p className={`card-text mx-1 ${Project.CardText} ${isExpanded ? Project.Expanded : ''}`}>
                  {showTechStack ? (
                    <span>{techStack}</span> // Display the tech stack when toggled
                  ) : (
                    <>
                      {isExpanded ? description : truncatedDescription}
                      {description.length > 100 && (
                        <button
                          className="btn btn-link p-0"
                          onClick={toggleReadMore}>
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </>
                  )}
                </p>
              </div>
              <div>
                <a
                  href={link}
                  target="_blank"
                  className={`btn btn-primary ${Project.MarginRight} ${Project.Btn}`}>
                  View Project
                </a>
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    className={`btn btn-secondary ${Project.Btn}`}>
                    <FaCode />
                  </a>
                )}
                {techStack && (
                  <button
                    className={`btn btn-secondary mx-1 ${Project.Btn}`}
                    onClick={toggleTechStack}
                    aria-label="Toggle Tech Stack">
                    {showTechStack ? <FaRegClipboard /> : <FaSitemap />}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
