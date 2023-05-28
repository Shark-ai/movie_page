import React from "react";

import "../assets/style/MainHeader.css";

import Navigation from "../components/Navigation";

import { useUser } from "../provider/UserProvider";

const MainHeader = (props) => {
  const { isAuthenticated, logout } = useUser();
  return (
    <header className="header">
      <h1 className="header-h1" >Movie page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={logout} />
    </header>
  );
};

export default MainHeader;
