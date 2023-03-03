import {  ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const itemData = [
  {
    img: "https://i.ibb.co/Nr9ZSjS/image.png",
    title: "image1",
  },
  {
    img: "https://i.ibb.co/H2NSvzv/image.png",
    title: "image2",
  },
  {
    img: "https://i.ibb.co/tpJkpMj/image.png",
    title: "image3",
  },
  {
    img: "https://i.ibb.co/jDC7fq4/image.png",
    title: "image4",
    cols: 2,
  },
  {
    img: "https://i.ibb.co/rkVNB6K/image.png",
    title: "image5",
  },
  {
    img: "https://i.ibb.co/HBdCn17/image.png",
    title: "image6",
  },
  {
    img: "https://i.ibb.co/h9vkX9D/image.png",
    title: "image7",
  },
  {
    img: "https://i.ibb.co/NLQBhTf/image.png",
    title: "image8",
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Moments() {
  return (
    <Box marginX={8}>
      <Typography marginBottom={6} variant="h4" sx={{ textAlign: "center" }}>
        Coffee Moments
      </Typography>
      <ImageList variant="quilted" cols={3}>
        {itemData.map((item) => (
          <ImageListItem sx={{margin:'12px'}}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Moments;
