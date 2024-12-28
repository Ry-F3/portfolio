import React, { useEffect, useState } from "react";
import Project from "../../styles/projects/Projects.module.css"; // Ensure to import the updated styles
import { FaCode } from 'react-icons/fa';

function ProjectCard({ image, title, description, link, repo, disabled }) {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isExpanded, setIsExpanced] = useState(false);

  const lineBarClasses = [
    Project.LineBarLong,
    Project.LineBarMedium,
    Project.LineBarLong,
    Project.LineBarMedium,
  ];

  const cardStyle = disabled ? Project.OpacityNeg : Project.OpacityPositive;

  const imageClass = disabled
    ? Project.PictureCardNeg
    : Project.PictureCardPositive;

  const toggleReadMore = () => setIsExpanced(!isExpanded);

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

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
              setLastUpdated(date.toLocaleString());
            }
          })
          .catch((error) => console.error("Failed to fetch GitHub data", error));
      }
    }
  }, [repo]);

  return (
    <div className="d-flex">
      {/* Flex container for consistent height */}
      <div className={`card mb-3 w-100 ${cardStyle} ${Project.Card}`}>
        <img src={image} className={`img-fluid ${imageClass} ${Project.CardImg}`} alt={title} />
        <div className={`card-body d-flex flex-column justify-content-between ${Project.CardBody}`}>
          {disabled ? (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              {/* Placeholder for project name */}
              <div className={`${Project.LineBarShort} mb-2`}></div>

              {/* Placeholder for project description */}
              <div>
                {lineBarClasses.map((lineBarClass, index) => (
                  <div key={index} className={`${lineBarClass} mb-2`}></div>
                ))}
              </div>

              {/* Placeholder for buttons */}
              <div
                className={`${Project.PlaceHolderBtn} mt-3`}></div>
            </div>
          ) : (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              <h5 className={`card-title ${Project.CardTitle}`}>{title}</h5>
              {lastUpdated && (
                <p className="text-muted">Last updated: {lastUpdated}</p>
              )}
              <p className={`card-text ${Project.CardText}`}>
                {isExpanded ? description : truncatedDescription}
                {description.length > 100 && (
                  <button
                    className="btn btn-link p-0 ml-2"
                    onClick={toggleReadMore}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
              <div>
                <a
                  href={link}
                  target="_blank"
                  className={`btn btn-primary ${Project.MarginRight} ${Project.Btn}`}>
                  View Project
                </a>
                {repo && (
                  <a href={repo} target="_blank" className={`btn btn-secondary ${Project.Btn}`}>
                     <FaCode />
                  </a>
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
