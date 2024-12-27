import React, { useEffect, useState } from "react";
import Bar from "../../styles/projects/Projects.module.css";

function ProjectCard({ image, title, description, link, repo, disabled }) {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    if (repo) {
      // Extract owner and repo name from the repo URL
      const match = repo.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        const [_, owner, repoName] = match;

        // Fetch last updated time from GitHub API
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

  const cardStyle = disabled
    ? { opacity: 0.5, pointerEvents: "none" }
    : { opacity: 1 };

  // Define image style based on disabled status
  const imageStyle = disabled
    ? { height: "200px", objectFit: "cover", backgroundColor: "#f4f5f7" } // Use cover when disabled
    : { height: "200px", objectFit: "contain", backgroundColor: "black" }; // Default style

  return (
    <div className="d-flex">
      {/* Flex container for consistent height */}
      <div className="card mb-3 w-100" style={cardStyle}>
        <img
          src={image}
          className="img-fluid"
          alt={title}
          style={imageStyle} // Apply the conditional image style
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
              {lastUpdated && (
                <p className="text-muted">
                  Last updated: {lastUpdated}
                </p>
              )}
              <p className="card-text">{description}</p>
              <div>
                <a
                  href={link}
                  target="_blank"
                  className="btn btn-primary"
                  style={{ marginRight: "10px" }}>
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
