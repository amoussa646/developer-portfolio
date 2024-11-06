import React, { useContext } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    navBar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: theme.secondary,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      height: "60px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      [t.breakpoints.down("sm")]: {
        height: "55px",
      },
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
    },
    navLink: {
      margin: "0 15px",
      fontSize: "1.3rem",
      fontWeight: 600,
      color: theme.primary,
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <nav className={classes.navBar}>
      <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>
      <div className={classes.navLinks}>
        <Fade left>
          <NavLink
            to="/"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <IoHomeSharp /> */}
            Home
          </NavLink>
        </Fade>
        <Fade left>
          <NavLink
            to="/#about"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <FaUser /> */}
            About
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink
            to="/#education"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <MdPhone /> */}
            Education
          </NavLink>
        </Fade>
        <Fade left>
          <NavLink
            to="/#experience"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <MdPhone /> */}
            Experience
          </NavLink>
        </Fade>
        <Fade left>
          <NavLink
            to="/#services"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <BsFillGearFill /> */}
            Services
          </NavLink>
        </Fade>
        <Fade left>
          <NavLink
            to="/#projects"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <MdPhone /> */}
            Projects
          </NavLink>
        </Fade>
        <Fade left>
          <NavLink
            to="/#contacts"
            smooth={true}
            spy={true}
            duration={2000}
            className={classes.navLink}
          >
            {/* <MdPhone /> */}
            Contact
          </NavLink>
        </Fade>
      </div>
    </nav>
  );
}

export default Navbar;
