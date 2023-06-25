import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import classes from "./InnerNavbar.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo} l>
          <BrandingWatermarkIcon
            fontSize={"larger"}
            sx={{ transform: "scale(3.5)" }}
          />
        </div>
        <div className={classes["menu-icon"]} onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div
          className={`${classes["nav-elements"]} ${
            showNavbar ? classes.active : ""
          }`}
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
