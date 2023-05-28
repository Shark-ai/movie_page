import React from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import "../assets/style/Foooter.css";

import { NavLink, useParams } from "react-router-dom";

function Foooter() {
  const year = new Date().getFullYear();
  const number = useParams().number;
  const navigate = useNavigate();

  if(window.location.pathname ==="/main/undefined") {navigate("/main/1")}

  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <NavLink to="https://www.linkedin.com/in/s%C3%A1ndor-harkai-ab9b3126a/">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon__link" />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://github.com/Shark-ai">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://www.facebook.com/Harkai91">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://www.instagram.com/alexanderharkai/">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <NavLink
            className="menu__link"
            activeclassname="active"
            to={`/main/${number}`}
          >
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" activeclassname="active" to="/">
            Login
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink className="menu__link" activeclassname="active" to="/post">
            Post
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className="menu__link"
            activeclassname="active"
            style={{ pointerEvents: "none" }}
            to="/edit"
          >
            Edit
          </NavLink>
        </li>
      </ul>
      <p>
        &copy;<span>{year}</span> Sándor Harkai [S.hark]ai | All Rights Reserved{" "}
      </p>
    </footer>
  );
}

export default Foooter;
