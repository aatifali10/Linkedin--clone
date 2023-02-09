import React from "react";
import { Paper, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack } from "@mui/system";

const ProfileEduction = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5, bb: "1px solid black" }}>
      <Typography variant="h6">Education</Typography>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/Stanford-uni.jpg"
          alt="Standford university logo"
          style={{ width: "5%", objectFit: "cover", marginRight: 5 }}
        />
        Standford University <br />
        Doctor of philosophy (PhD), Computer Science <br />
        2005 - 2012
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Indian institute of technology, Bombay <br />
        B.Tech., Computer Science and Engineering
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/Stanford-uni.jpg"
          alt="Standford university logo"
          style={{ width: "5%", objectFit: "cover", marginRight: 5 }}
        />
        Atomic Energy Central School
      </Stack>
    </Paper>
  );
};

export default ProfileEduction;
