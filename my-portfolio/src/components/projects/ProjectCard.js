import React from "react";
import Bar from "../../styles/projects/Projects.module.css";

function ProjectCard({ image, title, description, link, repo, disabled }) {
  const cardStyle = disabled
    ? { opacity: 0.5, pointerEvents: "none" }
    : { opacity: 1 };

  return (
    <div className="d-flex">
      {" "}
      {/* Flex container for consistent height */}
      <div className="card mb-3 w-100" style={cardStyle}>
        <img
          src={image}
          className="img-fluid"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }} // Ensure consistent image size
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ minHeight: "150px" }}>
          {disabled ? (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              {/* Placeholder for project name */}
              <div className={`${Bar.LineBarShort} mb-2`}></div>

              {/* Placeholder for project description */}
              <div className={`${Bar.LineBarLong} mb-2`}></div>
              <div className={`${Bar.LineBarMedium} mb-2`}></div>

              {/* Placeholder for buttons */}
              <div className={`${Bar.PlaceHolderBtn} bg-secondary mt-3`}></div>
            </div>
          ) : (
            <div className="d-flex flex-column flex-grow-1 justify-content-between">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <div>
                <a
                  href={link}
                  target="_blank"
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }} 
                >
                  View Project
                </a>
                {repo && (
                  <a href={repo} target="_blank" className="btn btn-secondary">
                    &lt;/&gt;
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
