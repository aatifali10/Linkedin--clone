import React from "react";
import { Paper, Typography } from "@mui/material";

// const Heading = styled(Typography)(({ theme }) => ({}));

const ProfileActivity = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h6">Activity</Typography>
      <Typography variant="span" sx={{ fontSize: 12 }}>
        43,270 followers
      </Typography>
      <Typography variant="h6" sx={{ fontSize: 20, mt: 2 }}>
        Parag hasn't posted lately
      </Typography>
      <Typography variant="body2">
        Parag’s recent posts and comments will be displayed here.
      </Typography>
    </Paper>
  );
};

export default ProfileActivity;
