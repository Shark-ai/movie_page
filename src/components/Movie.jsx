import React from "react";

import { useNavigate } from "react-router-dom";

import "../assets/style/Movie.css";

import Card from "./Card";
import CenterDiv from "./CenterDiv";

import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import Tooltip from "@mui/material/Tooltip";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";

const Movie = (props) => {
  const navigate = useNavigate();
  return (
    <Card>
      <li className="movie-container">
        <div className="title-container">
          <h2 className="fadingTitle">{props.title}</h2>
        </div>
        <div className="space-div">
          <CenterDiv>
            <h4 className="date-time">{props.releaseDate}</h4>
            <MovieRoundedIcon style={{ color: "#a8a6a6" }} fontSize="small" />
          </CenterDiv>
          <CenterDiv>
            <h4 className="date-time">{props.length}</h4>
            <QueryBuilderRoundedIcon
              style={{ color: "#a8a6a6" }}
              fontSize="small"
            />
          </CenterDiv>
        </div>
        <div className="fadingText">
          <p>{props.description}</p>
        </div>
        <div className="bottom-right-button">
          <Tooltip title="Read more" arrow>
            <DoubleArrowRoundedIcon
              className="toMovieButton"
              onClick={() => {
                navigate(`/edit/${props.id}`);
              }}
            ></DoubleArrowRoundedIcon>
          </Tooltip>
        </div>
      </li>
    </Card>
  );
};

export default Movie;
