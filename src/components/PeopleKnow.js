import React, { Fragment } from "react";
import { Paper, Typography, Stack, Box, Divider } from "@mui/material";
import BoyIcon from "@mui/icons-material/Boy";
import MuiButton from "@mui/material/Button";

const People = [
  {
    name: "shamoon KhOkhar",
    img: "/images/Drew.jpg",
    title: "React native developer",
    button: "Connect",
  },
  {
    name: "Ammar Ahmed",
    img: "/images/ned.jpg",
    title: "Assistant Software Enginner at Cubix",
    button: "Connect",
  },
  {
    name: "Akash Kumar",
    img: "/images/reed.jpg",
    title: "--",
    button: "Connect",
  },
  {
    name: "Susan Wojcicki",
    img: "/images/susan.jpg",
    title: "CEO of Youtube",
    button: "Message",
  },
  {
    name: "Neha Parikh ",
    img: "/images/neha.jpg",
    title: "CEO at Waze",
    button: "Follow",
  },
];

const PeopleKnow = () => {
  return (
    <Paper sx={{ p: 2.5, mt: 2.5 }}>
      <Typography variant="h3">People also viewed</Typography>
      {People.map(({ name, img, title, button }, i) => (
        <Fragment key={name + "key" + i}>
          <Stack direction={"row"} mt={1.5}>
            <Box
              component="img"
              src={img}
              alt="logo"
              height={50}
              style={{ borderRadius: "100px" }}
            />
            <Stack ml={2}>
              <Typography variant="subtitle1">{name}</Typography>
              <Typography variant="subtitle2">{title}</Typography>
            </Stack>
          </Stack>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <MuiButton
              variant="outlined"
              color="secondary"
              style={{
                borderRadius: "50px",
                marginTop: "10px",
              }}
              startIcon={<BoyIcon />}
            >
              {button}
            </MuiButton>
          </Box>

          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
};

export default PeopleKnow;
