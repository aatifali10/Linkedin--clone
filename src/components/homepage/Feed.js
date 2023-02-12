import React, { Fragment } from "react";
import { Paper, Typography, Stack, Box, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MuiButton from "@mui/material/Button";

const People = [
  {
    name: "Kodesinc",
    img: "/images/Drew.jpg",
    title: "Computer Software",
    button: "Follow",
  },
  {
    name: "Muhammad Muzammil",
    img: "/images/ned.jpg",
    title: "Employers & job Seekers",
    button: "Follow",
  },
  {
    name: "Mishkaat",
    img: "/images/reed.jpg",
    title: "Talent Acquisition Executive ",
    button: "Follow",
  },
];

const PeopleKnow = () => {
  return (
    <Paper sx={{ p: 2.5, mt: 2.5 }}>
      <Typography variant="h3">Add to your feed</Typography>
      {People.map(({ name, img, title, button }, i) => (
        <Fragment key={name + "key" + i}>
          <Stack>
            <Stack direction={"row"} mt={1.5}>
              <Box
                component="img"
                src={img}
                alt="logo"
                height={50}
                style={{ borderRadius: "100px" }}
              />
              <Stack>
                <Stack ml={2}>
                  <Typography variant="subtitle1">{name}</Typography>
                  <Typography variant="body2">{title}</Typography>
                </Stack>
                <MuiButton
                  variant="outlined"
                  color="secondary"
                  style={{
                    borderRadius: "50px",
                    marginTop: "10px",
                    width: "100px",
                    marginLeft: "17px",
                    marginBottom: "10px",
                  }}
                  startIcon={<AddIcon />}
                >
                  {button}
                </MuiButton>
              </Stack>
            </Stack>
          </Stack>

          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
};

export default PeopleKnow;
