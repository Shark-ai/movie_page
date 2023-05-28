import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import VhContainer from "../components/VhContainer";
import ColumnDiv from "../components/ColumnDiv";

import "../assets/style/AddMovie.css";

import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Tooltip from "@mui/material/Tooltip";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [length, setLength] = useState("");
  const navigate = useNavigate();

  const addElement = async (movie) => {
    const response = await fetch(
      "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const title = document.title;
    document.title = "Posted...";
    setTimeout(() => {
      document.title = title;
    }, 3000);
    navigate("/main/1");
  };

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
      title: title,
      description: description,
      releaseDate: releaseDate,
      length: length,
    };

    addElement(movie);
    setTitle("");
    setDescription("");
    setReleaseDate("");
    setLength("");
  }

  return (
    <VhContainer>
      <div className="post-container">
        <form>
          <div>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              size="small"
              color="primary"
              style={{
                caretColor: "rgba(60, 154, 210)",
              }}
              value={title}
              onChange={titleChangeHandler}
            />
            <br />
            {title.length === 0 && (
              <span className="deepskyblue">Please enter the title</span>
            )}
          </div>
          <br />
          <div>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              size="small"
              color="primary"
              value={description}
              onChange={descriptionChangeHandler}
              style={{
                caretColor: "rgba(60, 154, 210)",
              }}
            />
            <br />
            {description.length === 0 && (
              <span className="deepskyblue">Please enter the description</span>
            )}
          </div>
          <br />
          <div>
            <TextField
              id="outlined-basic"
              label="Release Date"
              variant="outlined"
              size="small"
              color="primary"
              style={{
                caretColor: "rgba(60, 154, 210)",
              }}
              value={releaseDate}
              onChange={releaseDateChangeHandler}
            />
            <br />
            {releaseDate.length === 0 && (
              <span className="deepskyblue">Please enter the release date</span>
            )}
          </div>
          <br />
          <div>
            <TextField
              id="outlined-basic"
              label="Length"
              variant="outlined"
              size="small"
              color="primary"
              style={{
                caretColor: "rgba(60, 154, 210)",
              }}
              value={length}
              onChange={lengthChangeHandler}
            />
            <br />
            {length.length === 0 && (
              <span className="deepskyblue">Please enter the length</span>
            )}
          </div>
          <br />
          <ColumnDiv align="center">
            <Tooltip title="Add" arrow>
              <AddBoxRoundedIcon
                style={{
                  backgroundColor: "rgba(60, 154, 210)",
                  borderRadius: "0.25rem",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                  width: "11.5ch",
                }}
                type="submit"
                onClick={submitHandler}
              ></AddBoxRoundedIcon>
            </Tooltip>
            <Tooltip title="Back" arrow>
              <Link to="/main/1">
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

export default AddMovie;
