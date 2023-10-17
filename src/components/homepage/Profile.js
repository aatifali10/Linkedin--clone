import React from "react";
import { Paper, Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Groups2Icon from "@mui/icons-material/Groups2";
import Divider from "@mui/material/Divider";

const MuiButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  "& .MuiButton-startIcon": {
    // marginRight: 4,
  },
}));

const ProfileImg = styled(Box)(({ theme }) => ({
  width: 65,
  height: 65,
  position: "absolute",
  left: 100,
  top: "10%",
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
    <Paper style={{ position: "relative", width: "100%", textAlign: "center" }}>
      <ConverPhoto
        component="img"
        src="/images/userbanner.svg"
        alt="userbanner"
      />
      <ProfileImg component="img" src="/images/userprofile.jpg" alt="" />
      <ProfileDetails>
        <Stack direction="column">
          <Typography variant="h3" mr={0.9} mb={2}>
            Aatif Ali
          </Typography>
          <Typography variant="body1" mb={2}>
            A front-end developer who loves to convert pixels into code my core
            expertise are Html5 || CSS3 || JavaScript || React js || Bootstrap
            || Tailwind & Firebase.
          </Typography>
        </Stack>
        <Divider />
        <Typography variant="body2">Who's viewed your profile  </Typography>
        <Typography variant="body2">Impressions of your post</Typography>
        {/* <Stack spacing={1} mt={1} m={2}>
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
        </Stack> */}
        <Divider />
      </ProfileDetails>
    </Paper>
  );
};

export default ProtfilePhoto;
