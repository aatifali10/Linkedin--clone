import React, { Fragment } from "react";
import { Paper, Typography, Stack, Box, Divider } from "@mui/material";

const skills = [
  {
    title: "Algorithm",
    endorseement: [
      {
        img: "/images/People.jpg",
        title:
          "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
      },
      {
        img: "/images/Twitter.jpg",
        title: "Endorsed by 5 colleagues at Twitter",
      },
      {
        img: "/images/NoImage.png",
        title: "8 endorsements",
      },
    ],
  },
  {
    title: "Algorithm",
    endorseement: [
      {
        img: "/images/People.jpg",
        title:
          "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
      },
      {
        img: "/images/Twitter.jpg",
        title: "Endorsed by 5 colleagues at Twitter",
      },
      {
        img: "/images/NoImage.png",
        title: "8 endorsements",
      },
    ],
  },
  {
    title: "Algorithm",
    endorseement: [
      {
        img: "/images/People.jpg",
        title:
          "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
      },
      {
        img: "/images/Twitter.jpg",
        title: "Endorsed by 5 colleagues at Twitter",
      },
      {
        img: "/images/NoImage.png",
        title: "8 endorsements",
      },
    ],
  },
];

const ProfileSkills = () => {
  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h3">Skills</Typography>
      {skills.map(({ title, endorseement }, i) => (
        <Fragment key={title + "key" + i}>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            {title}
          </Typography>
          {endorseement.map(({ title, img }, i) => (
            <Stack direction={"row"} key={title + i} alignItems="center" my={2}>
              <Box component="img" src={img} alt={title + "logo"} height={30} />
              <Typography variant="body2" ml={1}>
                {title}
              </Typography>
            </Stack>
          ))}
          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
};

export default ProfileSkills;
