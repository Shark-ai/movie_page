import React, { useState, useEffect } from "react";

import Foooter from "./Foooter";
import MainHeader from "./MainHeader";

function withLayout(Component, config) {
  return (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    }, []);
    return (
      <div>
        <MainHeader
          onLogout={() => {
            config.onLogout();
            setIsLoggedIn(false);
            window.localStorage.removeItem("isLoggedIn");
          }}
          isAuthenticated={isLoggedIn}
        />
        <Component {...props} />
        <Foooter />
      </div>
    );
  };
}

export default withLayout;
