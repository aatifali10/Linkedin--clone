import React from "react";
import { Paper, Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Lock } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const MuiButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
}));

const ProfileImg = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 50,
  top: 160,
  borderRadius: "100%",
  border: "5px solid #fff",
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    left: 50,
    top: 160,
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    left: 50,
    top: 160,
  },
}));

const HighLightText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "0.8rem",
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0, 3, 4),
}));

const ProtfilePhoto = () => {
  return (
    <Paper style={{ position: "relative" }}>
      <img src="/images/userbanner.svg" alt="userbanner" />
      <ProfileImg component="img" src="/images/userprofile.jpg" alt="" />
      <ProfileDetails>
        <Stack direction="row">
          <Typography variant="h5" mr={0.5}>
            Parag Agrawal
          </Typography>
          <sup>. 3rd</sup>
        </Stack>
        <Typography variant="h6">Former CEO at Twitter</Typography>
        <Typography variant="body1">
          San Francisco, California, United States.
          <HighLightText component="a" pl={1}>
            Contact info
          </HighLightText>
        </Typography>
        <Typography variant="body2">500+ connections</Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <MuiButton variant="outlined" startIcon={<Lock />}>
            Message
          </MuiButton>
          <MuiButton variant="outlined" startIcon={<AddIcon />}>
            Follow
          </MuiButton>
          <Button variant="text">More</Button>
        </Stack>
      </ProfileDetails>
    </Paper>
  );
};

export default ProtfilePhoto;
