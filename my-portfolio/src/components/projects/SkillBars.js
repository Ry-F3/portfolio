import React, { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";
import SkillStyles from "../../styles/projects/SkillBars.module.css";

const SkillBars = ({ skills }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentPercentages, setCurrentPercentages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("languages");

  // Reset percentages whenever the category changes
  useEffect(() => {
    // Initialize percentages to 0 for the active category
    setCurrentPercentages(skills[activeCategory].map(() => 0));
  }, [activeCategory, skills]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);

    if (loaded) {
      const intervals = skills[activeCategory].map((skill, index) => {
        const interval = setInterval(() => {
          setCurrentPercentages((prev) => {
            const newPercentages = [...prev];
            if (newPercentages[index] < skill.proficiency) {
              newPercentages[index] += 1; // Increment by 1
            } else {
              clearInterval(interval); // Clear interval when target is reached
            }
            return newPercentages;
          });
        }, 20); // Update every 20ms
        return interval;
      });

      return () => intervals.forEach(clearInterval);
    }

    return () => clearTimeout(timeout);
  }, [loaded, activeCategory, skills]);

  // Function to handle category toggle
  const handleCategoryToggle = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={SkillStyles.SkillBarsContainer}>
      {/* Category Toggle (Icons) */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-outline-primary mx-2 ${
            activeCategory === "languages" ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("languages")}>
          <FaCode />
        </button>
        <button
          className={`btn btn-outline-primary mx-2 ${
            activeCategory === "frameworks" ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("frameworks")}>
          <FaLaptopCode />
        </button>
        <button
          className={`btn btn-outline-primary mx-2 ${
            activeCategory === "databases" ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("databases")}>
          <FaDatabase />
        </button>
      </div>

      {/* Render the selected category */}
      {skills[activeCategory].map((skill, index) => (
        <div key={index} className={SkillStyles.SkillBar}>
          <div className={SkillStyles.SkillInfo}>
            <span className={SkillStyles.SkillName}>
              {skill.language || skill.framework || skill.database}
            </span>
            <span className={SkillStyles.SkillPercent}>
              {currentPercentages[index]}%
            </span>
          </div>
          <div className={SkillStyles.BarContainer}>
            <div
              className={SkillStyles.Bar}
              style={{
                width: loaded ? `${skill.proficiency}%` : "0%",
                backgroundColor: skill.color || "#3498db",
              }}>
              <div key={activeCategory} className={SkillStyles.Shimmer}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
