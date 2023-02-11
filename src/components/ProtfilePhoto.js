import React from "react";
import { Paper, Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Lock } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/AddOutlined";

const MuiButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  "& .MuiButton-startIcon": {
    marginRight: 4,
  },
}));

const ProfileImg = styled(Box)(({ theme }) => ({
  width: 160,
  height: 160,
  position: "absolute",
  left: 25,
  top: "24%",
  borderRadius: "100%",
  border: "5px solid #fff",
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    left: 25,
    top: "24%",
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    left: 25,
    top: "24%",
  },
}));

const HighLightText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 3, 4),
}));

const ConverPhoto = styled(Box)(({ theme }) => ({
  minHeight: 195.5,
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
  },
}));

const ProtfilePhoto = () => {
  return (
    <Paper style={{ position: "relative" }}>
      <ConverPhoto
        component="img"
        src="/images/userbanner.svg"
        alt="userbanner"
      />
      <ProfileImg component="img" src="/images/userprofile.jpg" alt="" />
      <ProfileDetails>
        <Stack direction="row">
          <Typography variant="h1" mr={0.5}>
            Parag Agrawal
          </Typography>
          <sup>. 3rd</sup>
        </Stack>
        <Typography variant="body1">Former CEO at Twitter</Typography>
        <Typography variant="body2">
          San Francisco, California, United States.
          <HighLightText component="a" pl={1}>
            Contact info
          </HighLightText>
        </Typography>
        <Typography variant="body2">500+ connections</Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <MuiButton variant="outlined" color="primary" startIcon={<Lock />}>
            Message
          </MuiButton>
          <MuiButton variant="outlined" color="primary" startIcon={<AddIcon />}>
            Follow
          </MuiButton>
          <MuiButton variant="outlined" color="secondary">
            More
          </MuiButton>
        </Stack>
      </ProfileDetails>
    </Paper>
  );
};

export default ProtfilePhoto;
