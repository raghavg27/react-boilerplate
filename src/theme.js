// src/theme.js
import { createTheme } from "@mui/material/styles";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
  },
});

export default theme;
