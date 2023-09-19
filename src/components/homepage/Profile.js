import React from "react";
import { Paper, Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Groups2Icon from "@mui/icons-material/Groups2";

const MuiButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  "& .MuiButton-startIcon": {
    // marginRight: 4,
  },
}));

const ProfileImg = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  position: "absolute",
  left: 15,
  top: "7%",
  borderRadius: "100%",
  border: "5px solid #fff",
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    left: 25,
    top: "13%",
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    left: 25,
    top: "13%",
  },
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0, 3, 2),
}));

const ConverPhoto = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
  },
}));

const ProtfilePhoto = () => {
  return (
    <Paper style={{ position: "relative", width: "100%" }}>
      <ConverPhoto
        component="img"
        src="/images/userbanner.svg"
        alt="userbanner"
      />
      <ProfileImg component="img" src="/images/userprofile.jpg" alt="" />
      <ProfileDetails>
        <Stack direction="row">
          <Typography variant="h3" mr={0.5} mb={2}>
            Parag Agrawal
          </Typography>
        </Stack>
        <Typography variant="body2">105 profile views</Typography>
        <Typography variant="body2">322 post impressions</Typography>
        <Stack spacing={1} mt={1} m={2}>
          <MuiButton
            variant="outlined"
            color="primary"
            startIcon={<Groups2Icon />}
          >
            Groups
          </MuiButton>
          <MuiButton
            variant="outlined"
            color="primary"
            startIcon={<CalendarMonthIcon />}
          >
            Events
          </MuiButton>
        </Stack>
      </ProfileDetails>
    </Paper>
  );
};

export default ProtfilePhoto;
