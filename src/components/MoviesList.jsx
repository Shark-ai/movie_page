import { useState } from "react";
import React from "react";

import Movie from "./Movie";
import Pagination from "./Pagination";
import CenterDiv from "./CenterDiv";

import "../assets/style/MovieList.css"

import TextField from "@mui/material/TextField";

const MoviesList = (props) => {
  const [filteredList, setFilteredList] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.fullmovies.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let content = "";

  if (filteredList.length === 0) {
    content = (
      <>
        <CenterDiv>
          <TextField
            id="outlined-basic"
            label="Search by Title"
            variant="outlined"
            style={{
              marginTop: "1.5rem",
              caretColor: "rgba(60, 154, 210)",
            }}
            size="small"
            color="primary"
            onChange={(e) => setFilteredList(e.target.value)}
          />
        </CenterDiv>
        <ul className="center-ul">
          {currentPosts.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              description={movie.description}
              length={movie.length}
              removeElement={props.removeElement}
              changeElement={props.changeElement}
            />
          ))}
        </ul>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={props.fullmovies.length}
          paginate={paginate}
        ></Pagination>        
      </>
    );
  }

  if (filteredList.length >= 1) {
    content = (
      <>
        <CenterDiv>
          <TextField
            id="outlined-basic"
            label="Search by Title"
            variant="outlined"
            style={{
              marginTop: "1.5rem",
              caretColor: "rgba(60, 154, 210)",
            }}
            size="small"
            color="primary"
            onChange={(e) => setFilteredList(e.target.value)}
          />
        </CenterDiv>
        <ul>
          {props.fullmovies
            .filter((m) => m.title.toLowerCase().includes(filteredList))
            .map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                title={movie.title}
                releaseDate={movie.releaseDate}
                description={movie.description}
                length={movie.length}
                removeElement={props.removeElement}
                changeElement={props.changeElement}
              />
            ))}
        </ul>
      </>
    );
  }

  return <section>{content}</section>;
};

export default MoviesList;
