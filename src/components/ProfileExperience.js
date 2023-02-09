import React from "react";
import { Paper, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const ProfileExperience = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h6">Experience</Typography>
      <Typography variant="span" sx={{ fontSize: 12 }}>
        43,270 followers
      </Typography>
      <Typography variant="h6" sx={{ fontSize: 20, mt: 2 }}>
        Parag hasn't posted lately
      </Typography>
      <Typography variant="body2" startIcon={<TwitterIcon />}>
        Parag’s recent posts and comments will be displayed here.
      </Typography>
    </Paper>
  );
};

export default ProfileExperience;
