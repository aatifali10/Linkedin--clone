import { Container, Grid } from "@mui/material";

import ProfileAbout from "../components/ProfileAbout";
import ProtfilePhoto from "../components/ProtfilePhoto";
import ProfileActivity from "../components/ProfileActivity";
import ProfileEductionAndExperience from "../components/ProfileEductionAndExperience";

const education = [
  {
    name: "Standford University",
    img: "/images/Stanford-uni.jpg",
    title: "Doctor of philosophy (PhD), Computer Science",
    years: "2005 - 2012",
  },
  {
    name: "Indian institute of technology, Bombay",
    img: "/images/India.jpg",
    title: "B.Tech., Computer Science and Engineering",
    years: "2005 - 2012",
  },
  {
    name: "Atomic Energy Central School",
    img: "/images/Stanford-uni.jpg",
    title: "",
    years: "",
  },
];

const experience = [
  {
    name: "Standford University",
    img: "/images/India.jpg",
    subList: [
      {
        title: "CEO",
        years: "2010 - 2012",
      },
      {
        title: "CEO",
        years: "2010 - 2012",
      },
      {
        title: "CEO",
        years: "2010 - 2012",
      },
    ],
  },
  {
    name: "Indian institute of technology, Bombay",
    img: "/images/India.jpg",
    title: "B.Tech., Computer Science and Engineering",
    years: "2005 - 2012",
  },
  {
    name: "Atomic Energy Central School",
    img: "/images/Stanford-uni.jpg",
    title: "",
    years: "",
  },
];

const User = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={9}>
          <ProtfilePhoto />
          <ProfileAbout />
          <ProfileActivity />
          <ProfileEductionAndExperience title="Experience" list={experience} />
          <ProfileEductionAndExperience title="Education" list={education} />
        </Grid>
        <Grid item sm={3}>
          <></>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
