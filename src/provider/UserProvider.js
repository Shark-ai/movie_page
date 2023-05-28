import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import React from "react";

const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);
  console.log(context);
  if (context === null) throw new Error("No user!");
  return context;
};

function UserProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    window.localStorage.setItem("isLoggedIn", "1");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const storedUserLoggedInInformation =
      window.localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
