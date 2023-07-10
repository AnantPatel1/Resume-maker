import { useState } from "react";
// import { NavLink } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import "./Navbar.css";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleShowNavbar = () => {
    if (showIcon === true) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container1">
        <div className="logo">
          <a href="www.google.com">
            <BookOutlinedIcon
              fontSize={"large"}
              sx={{ transform: "scale(2.5)" }}
              style={{ color: "white" }}
            />
          </a>
          <p>Resume Builder</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showIcon ? <DisabledByDefaultIcon /> : <DensitySmallIcon />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="www.google.com">Resume Builder</a>
            </li>
            <li>
              <a href="www.google.com">Resume Example</a>
            </li>
            <li>
              <a href="www.google.com">Cover Letter Example</a>
            </li>
            <li>
              <a href="www.google.com">Template</a>
            </li>
            <li>
              <a href="www.google.com">Login</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <p>Free Resume Examples & Sample Resume for All Jobs in 2023</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
