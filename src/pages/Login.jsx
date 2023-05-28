import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import VhContainer from "../components/VhContainer";

import "../assets/style/Login.css";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Tooltip from "@mui/material/Tooltip";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length >= 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /* useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []); */

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
    navigate("/main/1");
  };

  return (
    <VhContainer bg="linear-gradient(90deg, rgb(31, 61, 130) 0%, rgba(5,174,208,1) 100%)">
      <div className="card-login">
      <Tooltip title="Include '@'" arrow>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            color="primary"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </FormControl>
      </Tooltip>
        <br />
        <br />
      <Tooltip title="Be at least 6 characters" arrow>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            color="primary"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Tooltip>
        <br />
        <p>Forgot Password?</p>
        <br />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <IconButton
            style={{
              backgroundColor: "rgba(60, 154, 210)",
              borderRadius: "0.125rem",
              borderColor: "rgba(60, 154, 210)",
              color: "white",
              cursor: "pointer",
              disabled: "disabled",
            }}
            type="submit"
            onClick={submitHandler}
            disabled={!formIsValid}
          >
            <LoginRoundedIcon></LoginRoundedIcon>
          </IconButton>
        </FormControl>
        <p>
          Need an account? <span className="signUp">Sign up</span>
        </p>
      </div>
    </VhContainer>
  );
};

export default Login;
