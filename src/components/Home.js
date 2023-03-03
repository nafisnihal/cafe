import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Home() {
  return (
    <Box marginTop={3} id='home'>
      <Box>
        <Grid container spacing={0}>
          <Grid item md={4}>
            <Box className="full" sx={{ backgroundColor: "#ffffff" }}>
              <img
                src="https://i.ibb.co/WtKbB74/New-Project.jpg"
                alt="side-cover"
                className="img"
              ></img>
              <Box marginX={5}>
                <Typography marginTop={5} className="inverted" variant="h2">
                  Freshly Brewed Coffee
                </Typography>
                <Typography
                  marginY={3}
                  className="inverted"
                  variant="body2"
                >
                  Everyday in Arabika is like the colourful seasons of
                  Bangladesh. Arabika welcomes all its customers to come and
                  create special memories.
                </Typography>
                <Button variant="contained">Order Now</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <img
              src="https://i.ibb.co/WpW6g2Q/cover.png"
              alt="cover"
              className="img"
            ></img>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home