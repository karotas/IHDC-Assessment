import React from 'react';
import {

  RouterProvider,
} from "react-router-dom";
import './App.css';
import useRouter from './hooks/useRouter';
import { createTheme, ThemeProvider } from "@mui/material/styles"
function App() {
  let { router } = useRouter;

  let theme = createTheme({
    palette: {
      primary: {
        main: "#138DD8"
      },
      info: {
        main: "#ddd"
      },
      secondary: {
        main: "#272727",
        light: "#37474f"
      }
    },

  })
  return (
    <>
      <ThemeProvider
        theme={theme}

      >
        <RouterProvider
          router={router}

        />
      </ThemeProvider>

    </>
  );
}

export default App;
