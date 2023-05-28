import { Link, useParams, useNavigate } from "react-router-dom";

import "../assets/style/Edit.css";

import SimpleBackdrop from "../components/SimpleBackDrop";
import useGetApi from "../hooks/use-get";
import CenterDiv from "../components/CenterDiv";
import ColumnDiv from "../components/ColumnDiv";
import VhContainer from "../components/VhContainer";

import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Tooltip from "@mui/material/Tooltip";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";

const Edit = () => {
  const navigate = useNavigate();

  const id = useParams().id;

  const { loading, data } = useGetApi(
    "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies/" +
      id +
      ".json"
  );

  if (loading) return <SimpleBackdrop />;

  const removeElement = async (id) => {
    await fetch(
      "https://examdatabase-38585-default-rtdb.europe-west1.firebasedatabase.app/movies/" +
        id +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const title = document.title;
    document.title = "Deleted...";
    setTimeout(() => {
      document.title = title;
    }, 3000);
    navigate("/main/1");
  };

  return (
    <VhContainer direction="column">
      <div className="width-div">
        <CenterDiv bgcolor="rgb(52, 135, 185)" rigthRadius="1rem">
          <h2>{data.title}</h2>
        </CenterDiv>
        <div className="space-container">
          <CenterDiv>
            <h3>{data.releaseDate}</h3>
            <MovieRoundedIcon style={{ color: "#a8a6a6" }} fontSize="small" />
          </CenterDiv>
          <CenterDiv>
            <h3>{data.length}</h3>
            <QueryBuilderRoundedIcon
              style={{ color: "#a8a6a6" }}
              fontSize="small"
            />
          </CenterDiv>
        </div>
        <br />
        <p>{data.description}</p>
        <ColumnDiv>
          <Tooltip title="Delete" arrow>
            <DeleteForeverRoundedIcon
              style={{
                marginTop: "1rem",
                backgroundColor: "rgba(60, 154, 210)",
                color: "white",
                cursor: "pointer",
                width: "25rem",
              }}
              onClick={() => removeElement(id)}
            ></DeleteForeverRoundedIcon>
          </Tooltip>
          <Tooltip title="Edit" arrow>
            <Link to={`/update/${id}`}>
              <EditNoteRoundedIcon
                style={{
                  marginTop: "1rem",
                  backgroundColor: "rgba(60, 154, 210)",
                  color: "white",
                  cursor: "pointer",
                  width: "25rem",
                }}
              ></EditNoteRoundedIcon>
            </Link>
          </Tooltip>
          <Tooltip title="Back" arrow>
            <Link to="/main/1">
              <KeyboardBackspaceRoundedIcon
                style={{
                  marginTop: "1rem",
                  backgroundColor: "rgba(60, 154, 210)",
                  color: "white",
                  cursor: "pointer",
                  width: "25rem",
                  borderBottomLeftRadius: "1rem",
                }}
              ></KeyboardBackspaceRoundedIcon>
            </Link>
          </Tooltip>
        </ColumnDiv>
      </div>
    </VhContainer>
  );
};

export default Edit;
