import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const ProfileExperience = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h6">Experience</Typography>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Twitter <br />
        11 yrs 1 mo
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Research <br />
        AT&T Labs, Inc. <br />
        jun2010 - Sep 2010 . 4 mos
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Research <br />
        Microsoft Corporation <br />
        jun 2009 - Sep 2009 . 4 mos
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Research <br />
        Yahoo! <br />
        jun 2007 - Sep 2008 . 1 yr 4 mos
      </Stack>
      <Stack direction="row" sx={{ mb: 3 }}>
        <img
          src="/images/India.jpg"
          alt="indian Institute"
          style={{ width: "5%", objectFit: "cover", marginRight: 8 }}
        />
        Research <br />
        Microsoft <br />
        jun 2006 - Sep 2006 . 4 mos
      </Stack>
    </Paper>
  );
};

export default ProfileExperience;
