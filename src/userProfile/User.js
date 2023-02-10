import { Container, Grid, Paper } from "@mui/material";

import ProfileAbout from "../components/ProfileAbout";
import ProtfilePhoto from "../components/ProtfilePhoto";
import ProfileActivity from "../components/ProfileActivity";
import ProfileEductionAndExperience from "../components/ProfileEductionAndExperience";
import ProfileSkills from "../components/ProfileSkills";
import PeopleIcon from "@mui/icons-material/People";
import Interests from "../components/Interests";
import PeopleViewed from "../components/PeopleViewed";
import PeopleKnow from "../components/PeopleKnow";

const education = [
  {
    name: "Standford University",
    img: "/images/Stanford-uni.jpg",
    title: "",
    years: "11 yrs 1 mo",
  },
  {
    name: "Indian institute of technology, Bombay",
    img: "/images/India.jpg",
    title: "B.Tech., Computer Science and Engineering",
    years: "2005 - 2012",
  },
  {
    name: "Atomic Energy Central School",
    img: "/images/NoImage.png",
    title: "",
    years: "",
  },
];

const experience = [
  {
    name: "Twitter",
    img: "/images/Twitter.jpg",
    years: "11 yrs 1 mo",
    subList: [
      {
        title: "CEO",
        years: "Nov 2021 - Oct 2022 . 1 yr",
      },
      {
        title: "CTO",
        years: "Oct 2017 - Nov 2021 . 4 yrs 2 mo",
      },
      {
        title: "Distinguished Software Engineer",
        years: "Oct 2011 - Oct 2017 . 6 yrs 1 mo",
      },
    ],
  },
  {
    name: "Research",
    img: "/images/AT&T.jpg",
    title: "AT&T Labs, Inc",
    years: "Jun 2010 - Sep 2010 . 4 mos",
  },
  {
    name: "Research",
    img: "/images/Research.jpg",
    title: "Microsoft Corporation",
    years: "Jun 2009 - Sep 2009 . 4 mos",
  },
  {
    name: "Research",
    img: "/images/Yahoo.jpg",
    title: "Yahoo!",
    years: "Jun 2007 - Sep 2008 . 1yr 4 mos",
  },
  {
    name: "Research",
    img: "/images/Research.jpg",
    title: "Microsoft",
    years: "Jun 2006 - Sep 2006 . 4 mos",
  },
];

const User = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={9}>
          <ProtfilePhoto />
          <ProfileAbout />
          <ProfileActivity />
          <ProfileEductionAndExperience title="Experience" list={experience} />
          <ProfileEductionAndExperience title="Education" list={education} />
          <ProfileSkills />
          <Interests />
        </Grid>
        <Grid item sm={3}>
          <Paper style={{ height: 100 }}></Paper>
          <PeopleViewed />
          <PeopleKnow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
