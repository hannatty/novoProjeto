import { Typography, Grid } from "@mui/material";
import * as React from "react";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid
          xs={12}
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            fontFamily="QuickSand"
            fontWeight="bold"
            color="#2E2E2E"
            style={{ textAlign: "center" }}
          >
            Aqui tem lugar pra todo mundo que se preocupa com o próximo!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
