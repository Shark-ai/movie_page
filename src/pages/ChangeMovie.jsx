import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import VhContainer from "../components/VhContainer";
import ColumnDiv from "../components/ColumnDiv";

import "../assets/style/ChangeMovie.css";
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Tooltip from "@mui/material/Tooltip";

const ChangeMovie = () => {
  const idd = useParams().id;

  const [dummyMovies, setDummyMovies] = useState([]);
  const [id, setId] = useState(idd);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [length, setLength] = useState("");

  const navigate = useNavigate();

  const fetchMovies = useCallback(async () => {
    setDummyMovies([]);
    try {
      const response = await fetch(
        "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies/" +
          id +
          ".json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      setTitle(data.title);
      setDescription(data.description);
      setReleaseDate(data.releaseDate);
      setLength(data.length);
    } catch (e) {
      console.log(e.message);
    }
  }, [id]);

  console.log(dummyMovies);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    setId(idd);
    setTitle(title);
    setDescription(description);
    setReleaseDate(releaseDate);
    setLength(length);
  }, [idd, title, description, releaseDate, length]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const releaseDateChangeHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const lengthChangeHandler = (event) => {
    setLength(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      id: id,
      title: title,
      description: description,
      releaseDate: releaseDate,
      length: length,
    };

    updateMovie(movie, movie.id);
    setId("");
    setTitle("");
    setDescription("");
    setReleaseDate("");
    setLength("");
    console.log(movie.id);
  }

  const updateMovie = async (movie, id) => {
    const response = await fetch(
      "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies/" +
        id +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const title = document.title;
    document.title = "Updated...";
    setTimeout(() => {
      document.title = title;
    }, 3000);
    navigate("/main/1");
  };

  return (
    <VhContainer>
      <div className="update-container">
        <form>
          <TextField
            id="outlined-basic"
            label="Title"
            size="small"
            color="primary"
            style={{
              caretColor: "rgba(60, 154, 210)",
            }}
            value={title}
            onChange={titleChangeHandler}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            size="small"
            color="primary"
            style={{
              caretColor: "rgba(60, 154, 210)",
            }}
            value={description}
            onChange={descriptionChangeHandler}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="ReleaseDate"
            size="small"
            color="primary"
            style={{
              caretColor: "rgba(60, 154, 210)",
            }}
            value={releaseDate}
            onChange={releaseDateChangeHandler}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Length"
            size="small"
            color="primary"
            style={{
              caretColor: "rgba(60, 154, 210)",
            }}
            value={length}
            onChange={lengthChangeHandler}
          />
          <br />
          <br />
          <ColumnDiv align="center">
            <Tooltip title="Update" arrow>
              <UpgradeRoundedIcon
                style={{
                  backgroundColor: "rgba(60, 154, 210)",
                  borderRadius: "0.125rem",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                  width: "11.5ch",
                }}
                type="submit"
                onClick={submitHandler}
              ></UpgradeRoundedIcon>
            </Tooltip>
            <Tooltip title="Back" arrow>
              <Link to={`/edit/${id}`}>
                <KeyboardBackspaceRoundedIcon
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "rgba(60, 154, 210)",
                    color: "white",
                    borderRadius: "0.25rem",
                    fontSize: "2rem",
                    cursor: "pointer",
                    width: "11.5ch",
                  }}
                ></KeyboardBackspaceRoundedIcon>
              </Link>
            </Tooltip>
          </ColumnDiv>
        </form>
      </div>
    </VhContainer>
  );
};

export default ChangeMovie;
