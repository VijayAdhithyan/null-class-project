import { Box } from "@mui/material";
import React from "react";
import "./LeftSideBar.css";
import { Link, useNavigate } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import { useSelector } from "react-redux";

const LeftSideBar = () => {
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to See Posts");
      navigate("/Auth/Login");
    } else {
      navigate("/Community");
    }
  };
  return (
    <Box className="left-side-bar">
      <Box className="lsb-container" pt={9}>
        <Box className="nav-title-container">
          <Link to="/" className="nav-title-1" activeclassname="active">
            <p>Home</p>
          </Link>
          <p
            className="nav-title-1"
            activeclassname="active"
            onClick={checkAuth}
            style={{ cursor: "pointer" }}
          >
            Community
          </p>
          <p className="nav-title-2">Public</p>
        </Box>
        <Box className="nav-sub-link-container">
          <Link
            to="/Question"
            className="question-container"
            activeClassName="active"
          >
            <PublicIcon
              style={{ fontSize: "1.1rem", color: "#555" }}
              className="public-icon"
            />
            <p className="question-title">Question</p>
          </Link>
          <Link to="/Tags" className="nav-sub-titles" activeClassName="active">
            <p>Tags</p>
          </Link>
          <Link to="/Users" className="nav-sub-titles" activeClassName="active">
            <p>User</p>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
