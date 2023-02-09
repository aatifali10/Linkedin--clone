import React from "react";
import { Paper, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const Followers = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
}));

const ProfileActivity = () => {
  return (
    <Paper sx={{ mt: 1, p: 3 }}>
      <Typography variant="h3">Activity</Typography>
      <Followers variant="body2">43,270 followers</Followers>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Parag hasn't posted lately
      </Typography>
      <Typography variant="body2">
        Parag’s recent posts and comments will be displayed here.
      </Typography>
    </Paper>
  );
};

export default ProfileActivity;
