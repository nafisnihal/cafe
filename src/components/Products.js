import React from 'react'
import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';

function Products() {
  return (
    <Box marginTop={11} marginBottom={8} marginX={8} id="products">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          Our Popular Products
        </Typography>
        <Button
          sx={{ color: "#ffffff", borderColor: "#ffffff" }}
          variant="outlined"
        >
          See All
        </Button>
      </Box>
      <Box marginTop={6}>
        <Grid container spacing={3}>
          <Grid item md={4}>
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
                src="https://i.ibb.co/FspJMHq/packet-1.png"
                alt="packet-1"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Italian Coffee Beans
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                1085.00৳
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
          <Grid item md={4}>
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
                src="https://i.ibb.co/r62smWT/packet-2.png"
                alt="packet-2"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                Brazil Coffee Beans
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                1550.00৳
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
          <Grid item md={4}>
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
                src="https://i.ibb.co/zHBzvwZ/packet-3.png"
                alt="packet-3"
              ></img>
              <Typography marginTop={3} variant="h4" sx={{ color: "#ffffff" }}>
                American Coffee Beans
              </Typography>
              <Typography
                marginTop={1}
                marginBottom={2}
                sx={{ color: "#A35715" }}
              >
                1085.00৳
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

export default Products