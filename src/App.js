import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SimpleBackdrop from "./components/SimpleBackDrop";
import withLayout from "./layouts/withLayout";

import { useUser } from "./provider/UserProvider";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";

const Main = lazy(() => import("./pages/Main"));
const Edit = lazy(() => import("./pages/Edit"));
const ChangeMovie = lazy(() => import("./pages/ChangeMovie"));
const AddMovie = lazy(() => import("./pages/AddMovie"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const B = withLayout(Edit);
const C = withLayout(AddMovie);
const D = withLayout(ChangeMovie);

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
  },
});

function App() {
  const { isAuthenticated, login } = useUser();

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SimpleBackdrop />}>
        <Routes>
          <Route path="/" element={<Login onLogin={login} />} />
          <Route
            path="/main/:number"
            element={<Main isLoggedIn={isAuthenticated} />}
          />
          <Route path="/post" element={<C />} />
          <Route path="/edit/:id" element={<B />} />
          <Route path="/update/:id" element={<D />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
