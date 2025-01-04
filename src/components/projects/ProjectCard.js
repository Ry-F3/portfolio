import React, {useState } from "react";
import Project from "../../styles/projects/Projects.module.css";
import { FaEllipsisV, FaCode, FaSitemap, FaRegClipboard } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  description,
  link,
  repo,
  disabled,
  techStack,
  lastUpdated
}) {

  const [isExpanded, setIsExpanced] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);

  const lineBarClasses = [
    Project.LineBarLong,
    Project.LineBarMedium,
    Project.LineBarLong,
    Project.LineBarMedium,
  ];

  const cardStyle = disabled ? Project.OpacityNeg : Project.OpacityPositive;

  const toggleReadMore = () => setIsExpanced(!isExpanded);

  const toggleTechStack = () => setShowTechStack(!showTechStack);

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}... ` : description;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };



  const handleMouseLeave = () => {
    setIsExpanced(false);
    setShowTechStack(false);
    setIsDropdownOpen(false);
  };

  // Generate a unique id for the card using the title
  const cardClassId = title
    .replace(/^\s+|\s+$/g, "") // Remove leading and trailing whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove non-alphanumeric characters except hyphens and underscores

  const ClassId = cardClassId;

  return (
    <div className="d-flex">
      <div
        className={`card mb-3 w-100 ${cardStyle} ${Project.Card} ${Project[ClassId]}`}
        onMouseLeave={handleMouseLeave}>
        <div className={`mt-4 ${Project.ImageContainer}`}>
          <img src={image} className={Project.CardImg} alt={title} />
        </div>
        <div
          className={`card-body d-flex flex-column justify-content-between ${Project.CardBody}`}>
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
              <div
                className={`mb-3 flex-grow-1 ${Project.CardTextBox} ${
                  isExpanded ? Project.Expanded : ""
                }`}>
                <h5 className={`card-title mt-1 p-1 ${Project.CardTitle}`}>
                  {title}
                </h5>
                {lastUpdated && (
                  <p className="text-muted p-1">Last updated: {lastUpdated}</p>
                )}
                <p className={`card-text mx-1 ${Project.CardText}`}>
                  {showTechStack ? (
                    <div className={`${Project.CardTextBox}`}>
                      <h6>Tech Stack:</h6>
                      <ul>
                        {techStack.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <>
                      {isExpanded ? description : truncatedDescription}
                      {description.length > 100 && !isExpanded && (
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
            </div>
          )}
        </div>
        <div className={Project.BorderTop}></div>
        {/* Button Section - This is now separated from the card body */}
        <div>
          <div className="d-flex p-2 justify-content-between">
            {/* View Project button on the left */}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary text-sm ${Project.MarginRight} ${Project.Btn}`}>
              View Project
            </a>

            {/* Ellipsis (dropdown) button on the right */}
            <div className="dropdown">
              <button
                className={`btn btn-secondary ${Project.Btn}`}
                type="button"
                id="dropdownMenuButton"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}>
                <FaEllipsisV />
              </button>
              <ul
                className={`dropdown-menu ${Project.DropContain} ${
                  isDropdownOpen ? "show" : ""
                } `}
                aria-labelledby="dropdownMenuButton">
                {repo && (
                  <li className={Project.DropItem1}>
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${Project.DropItem1} p-0 ${Project.DropItemCustom}`}>
                      <FaCode size={16} />
                    </a>
                  </li>
                )}
                {techStack && (
                  <li className={Project.DropItem2} onClick={toggleTechStack}
                  aria-label="Toggle Tech Stack">
                    <a
                      className={`${Project.DropItem2} p-0 ${Project.DropItemCustom}`}
                      >
                      {showTechStack ? (
                        <FaRegClipboard size={16} />
                      ) : (
                        <FaSitemap size={16} />
                      )}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
