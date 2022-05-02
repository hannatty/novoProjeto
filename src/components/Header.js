import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Button, Box } from "@mui/material";

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          marginBottom: 0,
          marginTop: 0,
          display: "flex",
          width: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          color: "#FFF",
          fontFamily: "Quicksand",
          fontSize: "1rem",
          fontWeight: "600",
        },
      },
    },
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid
          xs={12}
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#9098e0",
            margin: 0,
          }}
        >
          <Box
            component="img"
            sx={{
              width: "300px",
              height: "300px",
            }}
            alt="Banner"
            src="/logo_white.svg"
          />
          <Button>Quem somos</Button>
          <Button>Como Funciona</Button>
          <Button
            variant="contained"
            style={{ color: "#505050", backgroundColor: "#B2DECD" }}
          >
            Entrar
          </Button>
        </Grid>
        <Grid>
          <Box
            component="img"
            sx={{
              display: "flex",
              width: "100%",
            }}
            alt="Banner"
            src="/banner.svg"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
