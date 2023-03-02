import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box id="about" paddingTop={11}>
      <Typography sx={{ textAlign: "center" }} variant="h3">
        Providing Unique Coffee Experiences
      </Typography>
      <Box>
        <Grid marginTop={8} container spacing={0}>
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "79px",
                textAlign: "end",
              }}
            >
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">Coffee Shop</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">Coffee Machine</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">High Quality</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box>
              <img
                src="https://i.ibb.co/VV9SmYT/middle.png"
                alt="middle"
                className="img-mid"
              ></img>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "79px",
                textAlign: "start",
              }}
            >
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">The Perfect Cup</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">Barista Coffee</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
              <Box sx={{ width: "200px" }}>
                <Typography variant="h5">Supreme Beans</Typography>
                <Typography marginTop={2} variant="subtitle1">
                  Our Coffees are carefully selected for quality, flavor and
                  social impact.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={12} marginBottom={6} marginX={8}>
        <Typography sx={{ textAlign: "start" }} variant="h3">
          We Are Open to Create Special Memories{" "}
        </Typography>
        <Grid container marginTop={6} spacing={3}>
          <Grid item md={4}>
            <Box>
              <Typography
                variant="body2"
                marginBottom={2}
                sx={{ lineHeight: "25px" }}
              >
                The morning is like a quiet winter day,ideal for alone time and
                for reading books. The noon is like Autumn, full of colours and
                banters. The evening is like a summer night bustling with people
                and ideal for hangouts. Arabika welcomes all its customers to
                come and create special memories.
              </Typography>
              <img
                className="img"
                src="https://i.ibb.co/7Jxd2JL/c1.png"
                alt="c1"
              ></img>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box>
              <img
                className="img"
                src="https://i.ibb.co/WfLy6Zg/c2.png"
                alt="c2"
              ></img>
            </Box>
            <Typography
              variant="body2"
              marginTop={2}
              sx={{ lineHeight: "20px" }}
            >
              Every cup is brewed with freshly roasted single origin beans. 100%
              premium Arabica blend is used to ensure the exquisite taste of
              coffee. These beans are ground and then the shots are timed to
              perfection; ready to serve fresh and hot. The house blend is well
              balanced for both strong and mild coffee drinks.
            </Typography>
          </Grid>
          <Grid sx={{ margin: "auto" }} item md={3}>
            <Box>
              <img
                className="img"
                src="https://i.ibb.co/wSL90Rv/c3.png"
                alt="c3"
              ></img>
            </Box>
            <Typography
              variant="body2"
              marginTop={2}
              sx={{ lineHeight: "20px" }}
            >
              Ready Every morning. The experience creates memories.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About