import { Button, Grid, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

function Blog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box marginBottom={10} id="blog">
      <Grid container spacing={0}>
        <Grid item md={4}>
          <Box className="video-modal">
            <Button className="play-button" onClick={handleOpen}>
              <PlayCircleOutlinedIcon
                sx={{ color: "#ffffff", fontSize: "200px" }}
              ></PlayCircleOutlinedIcon>
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ReactPlayer
                url="https://youtu.be/TEH_kNy5Ebk"
                id="modal-modal-description"
                muted={true}
                playing={true}
                controls={true}
              ></ReactPlayer>
              <Button
                sx={{ color: "#ffffff", borderColor: "#ffffff", marginTop:'20px' }}
                variant="outlined"
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Modal>
        </Grid>
        <Grid item md={8}>
          <Box marginLeft={3}>
            <Typography variant="h4">Coffee Fit For Everyone</Typography>
            <Typography
              marginTop={2}
              sx={{ lineHeight: "25px", width: "825px" }}
              variant="body2"
            >
              Our journey was inspired from the growing coffee culture in Dhaka.
              We support the growth of coffee culture partnering with other
              cafés and provide opportunities for working students to gather
              valuable work experience. Our vision is to make our customers
              experience our quality brew and create special memories. We value
              our customers and want to make sure that when you enter our cafés
              you become part of Arabika.
            </Typography>
          </Box>
          <Box marginTop={6}>
            <Grid container spacing={0}>
              <Grid item md={6}>
                <Paper
                  sx={{
                    backgroundColor: "#0E0E0E",
                    padding: "36px 67px",
                  }}
                  elevation={0}
                >
                  <Typography variant="h5" sx={{ color: "#ffffff" }}>
                    Opening Hours
                  </Typography>
                  <Box marginTop={3}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        Saturday
                      </Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        10 AM - 11 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>Sunday</Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        12 PM - 11 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>Monday</Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        09 AM - 10 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>Tuesday</Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        10 AM - 11 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        Wednesday
                      </Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        11 AM - 11 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>
                        Thursday
                      </Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        10 AM - 11 PM
                      </Typography>
                    </Box>
                    <Box
                      marginTop={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#ffffff" }}>Friday</Typography>
                      <Typography sx={{ color: "#A35715" }}>
                        09 AM - 12 AM
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid sx={{ backgroundColor: "#ffffff" }} item md={6}>
                <Grid marginTop={12} container>
                  <Grid item md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Typography sx={{ color: "#000000" }} variant="h5">
                        Friday Offer
                      </Typography>
                      <Typography sx={{ color: "#A35715" }} variant="h3">
                        05%
                      </Typography>
                      <Typography sx={{ color: "#A35715" }} variant="h3">
                        OFF
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box>
                      <img
                        className="img-small"
                        src="https://i.ibb.co/4jJSyhR/image.png"
                        alt="imhgjage"
                        border="0"
                      ></img>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Blog;
