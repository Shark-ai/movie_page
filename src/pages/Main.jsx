import React from "react";
import { Fragment, useState, useCallback, useEffect } from "react";

import MoviesList from "../components/MoviesList";
import withLayout from "../layouts/withLayout";
import CenterDiv from "../components/CenterDiv";
import SimpleBackdrop from "../components/SimpleBackDrop";

import "../assets/style/Main.css";

import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import Tooltip from "@mui/material/Tooltip";

const Main = (props) => {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setDummyMovies([]);
    setError(null);
    try {
      const response = await fetch(
        "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const transformData = [];

      for (const key in data) {
        transformData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          releaseDate: data[key].releaseDate,
          length: data[key].length,
        });
      }
      setDummyMovies(transformData);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content = <p>Not found movies.</p>;

  if (dummyMovies.length > 0) {
    content = <MoviesList fullmovies={dummyMovies} />;
  }

  if (loading) {
    content = <SimpleBackdrop/>;
  }

  if (error) {
    content = <p>Something Went wrong</p>;
  }

  return (
    <Fragment>
      {props.isLoggedIn && (
        <main className="main-container">
          <section>{content}</section>
          <CenterDiv>
            <Tooltip title="Refresh" arrow>
              <CloudDownloadRoundedIcon
                style={{
                  backgroundColor: "white",
                  color: "rgb(18, 118, 169)",
                  cursor: "pointer",
                  width: "6.25rem",
                  height: "6.25rem",
                  marginTop: "2.5rem",
                }}
                onClick={fetchMovies}
              ></CloudDownloadRoundedIcon>
            </Tooltip>
          </CenterDiv>
        </main>
      )}
    </Fragment>
  );
};

export default withLayout(Main, {
  onLogout: () => {
    alert("Logout");
  },
  isAuthenticated: true,
});
