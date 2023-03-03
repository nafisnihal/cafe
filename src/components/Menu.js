import { Box, Button, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

function Menu() {
  return (
    <Box marginTop={12} marginBottom={10} marginX={8} id="menu">
      <Box sx={{ textAlign: "center" }}>
        <Typography marginBottom={4} variant="h3">
          To Discover More Look Into Our Coffee Menu
        </Typography>
        <Button
          sx={{ color: "#ffffff", borderColor: "#ffffff" }}
          variant="outlined"
        >
          See All
        </Button>
      </Box>

      <Box marginTop={9}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Paper
              sx={{
                backgroundColor: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
              }}
              elevation={0}
            >
              <img
                className="img-small"
                src="https://i.ibb.co/sb4gMbR/cup-1.png"
                alt="cup-1"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Americano
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                150.00৳
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                size="small"
                sx={{ color: "#A35715" }}
              />
              <Button
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  marginTop: "24px",
                }}
                variant="outlined"
                size="small"
              >
                ADD to Cart
              </Button>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              sx={{
                backgroundColor: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
              }}
              elevation={0}
            >
              <img
                className="img-small"
                src="https://i.ibb.co/526JLhY/cup-4.png"
                alt="cup-2"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Americano
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                150.00৳
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                size="small"
                sx={{ color: "#A35715" }}
              />
              <Button
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  marginTop: "24px",
                }}
                variant="outlined"
                size="small"
              >
                ADD to Cart
              </Button>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              sx={{
                backgroundColor: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
              }}
              elevation={0}
            >
              <img
                className="img-small"
                src="https://i.ibb.co/99SWjpR/cup-3.png"
                alt="cup-3"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Americano
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                150.00৳
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                size="small"
                sx={{ color: "#A35715" }}
              />
              <Button
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  marginTop: "24px",
                }}
                variant="outlined"
                size="small"
              >
                ADD to Cart
              </Button>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper
              sx={{
                backgroundColor: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
              }}
              elevation={0}
            >
              <img
                className="img-small"
                src="https://i.ibb.co/gWW43Xs/cup-2.png"
                alt="cup-4"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Americano
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                150.00৳
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                size="small"
                sx={{ color: "#A35715" }}
              />
              <Button
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  marginTop: "24px",
                }}
                variant="outlined"
                size="small"
              >
                ADD to Cart
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Menu;
