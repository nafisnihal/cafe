import { Button, Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ReactPlayer from "react-player/youtube";

function Blog() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box id="blog">
      <Grid container spacing={0}>
        <Grid item md={4}>
          <Box className='video-modal'>
            <Button onClick={handleOpen}>Open modal</Button>
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
                sx={{ color: "#ffffff", borderColor: "#ffffff" }}
                variant="outlined"
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Modal>
          
        </Grid>
        <Grid item md={8}>
          B
        </Grid>
      </Grid>
    </Box>
  );
}

export default Blog