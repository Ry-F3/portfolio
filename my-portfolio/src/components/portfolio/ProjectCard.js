import React from "react";

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }} // Ensure consistent image size
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
