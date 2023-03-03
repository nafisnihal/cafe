import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import {
  AddLocation,
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhone,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

function Contact() {
    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
  return (
    <Box id="contact" marginY={10}>
      <Box>
        <Grid container>
          <Grid sx={{ margin: "auto 0" }} item md={5.5}>
            <hr />
          </Grid>
          <Grid sx={{ textAlign: "center" }} item md={1}>
            <Button onClick={goToTop}>
              <ArrowCircleUpOutlinedIcon
                sx={{ color: "#ffffff", fontSize: "100px" }}
              ></ArrowCircleUpOutlinedIcon>
            </Button>
            <Typography sx={{ textAlign: "center" }} variant="body 2">
              Go To Top
            </Typography>
          </Grid>
          <Grid sx={{ margin: "auto 0" }} item md={5.5}>
            <hr />
          </Grid>
        </Grid>
      </Box>
      <Box
        marginTop={2}
        marginX={8}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50px" }}>
          <img
            src="https://i.ibb.co/XJYvpqY/output-onlinepngtools-1.png"
            alt="logo"
          ></img>
        </Box>
        <Box sx={{ width: "775px" }}>
          <Typography variant="body2">
            Freshly welcomes all its customers to come and create special
            memories. Our vision is to make our customers experience our quality
            brew and create special memories.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="http://www.facebook.com/nafisnihal12">
            <Facebook sx={{ color: "#ffffff", marginRight: "10px" }}></Facebook>
          </a>
          <a href="http://www.instagram.com">
            <Instagram
              sx={{ color: "#ffffff", marginRight: "10px" }}
            ></Instagram>
          </a>
          <a href="http://www.twitter.com">
            <Twitter sx={{ color: "#ffffff", marginRight: "10px" }}></Twitter>
          </a>
          <a href="http://www.pinterest.com">
            <Pinterest
              sx={{ color: "#ffffff", marginRight: "10px" }}
            ></Pinterest>
          </a>
          <a href="http://www.youtube.com">
            <YouTube sx={{ color: "#ffffff", marginRight: "10px" }}></YouTube>
          </a>
        </Box>
      </Box>
      <Box
        marginX={8}
        marginTop={7}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocalPhone></LocalPhone>
          <Typography marginLeft={1} variant="body2">
            +1234567890
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddLocation></AddLocation>
          <Typography marginLeft={1} variant="body2">
            Bashundhara R/A, Dhaka
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmailOutlined></EmailOutlined>
          <a className="navs" href="mailto:freshlycafe@support.com">
            <Typography marginLeft={1} variant="body2">
              freshlycafe@support.com
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
