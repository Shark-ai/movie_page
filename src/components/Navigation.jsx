import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/style/Navigation.css";

import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import Tooltip from "@mui/material/Tooltip";

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="navigation-ul">
        {props.isLoggedIn && (
          <li>
            <Tooltip title="add Film" arrow>
              <VideoCallRoundedIcon
                className="addMovieButton"
                onClick={() => {
                  navigate("/post");
                }}
                fontSize="large"
              ></VideoCallRoundedIcon>
            </Tooltip>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Tooltip title="Logout" arrow>
              <ExitToAppRoundedIcon
                className="logout"
                onClick={() => {
                  props.onLogout();
                  navigate("/");
                }}
                fontSize="large"
              ></ExitToAppRoundedIcon>
            </Tooltip>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
