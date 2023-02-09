import React from "react";
import { Paper, Typography } from "@mui/material";

const ProfileSkills = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Skills
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Algorithms
      </Typography>
      <Typography variant="body2">
        Chief Technology Officer at Twitter
      </Typography>
    </Paper>
  );
};

export default ProfileSkills;
