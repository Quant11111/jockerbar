import { createTheme } from "@mui/material/styles";

// Thème personnalisé pour le site Jockerbar
const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63", // Rose pour les éléments principaux
    },
    secondary: {
      main: "#673ab7", // Violet pour les éléments secondaires
    },
    background: {
      default: "#f8f9fa", // Gris clair pour le fond
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});

export default theme;
