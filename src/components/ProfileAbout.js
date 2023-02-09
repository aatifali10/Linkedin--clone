import React from "react";
import { Paper, Typography } from "@mui/material";

// const Heading = styled(Typography)(({ theme }) => ({}));

const ProfileAbout = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        About
      </Typography>
      <Typography variant="body2">
        Chief Technology Officer at Twitter
      </Typography>
    </Paper>
  );
};

export default ProfileAbout;
