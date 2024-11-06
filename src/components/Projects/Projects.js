import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";
import humanoid from "./humanoid.MP4";
import companion from "./companion.MP4";
import hand from "./hand.MP4";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 2).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}

              <div className="projects--bodyContainer">
                {projectsData.slice(2, 4).map((project) => (
                  <SingleProject
                    theme={theme}
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    code={project.code}
                    demo={project.demo}
                    image={project.image}
                  />
                ))}
              </div>
            </div>
            <h1> . </h1>
            <div className="projects--bodyContainer">
              {projectsData.slice(4, 6).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
            <h1> . </h1>
            <div className="projects--bodyContainer">
              {projectsData.slice(6, 7).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
          {/* Video Section */}
          <div className="videos">
            <h2 style={{ color: theme.primary }}>Videos</h2>
            {/* You can embed video players or use a video gallery component here */}
            {/* Example video player */}
            <video width="380" height="200" controls>
              <source src={humanoid} type="video/mp4" />
            </video>
            <video width="380" height="200" controls>
              <source src={companion} type="video/mp4" />
            </video>
            <video width="380" height="200" controls>
              <source src={hand} type="video/mp4" />
            </video>
            {/* Add more video players or use a video gallery component */}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
