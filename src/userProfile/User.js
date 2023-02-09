import { Container } from "@mui/material";
import React from "react";
import ProfileAbout from "../components/ProfileAbout";
import ProfileActivity from "../components/ProfileActivity";
import ProfileEduction from "../components/ProfileEduction";
import ProfileExperience from "../components/ProfileExperience";
// import ProfileSkills from "../components/ProfileSkills";
import ProtfilePhoto from "../components/ProtfilePhoto";

const User = () => {
  return (
    <Container>
      <ProtfilePhoto />
      <ProfileAbout />
      <ProfileActivity />
      <ProfileExperience />
      <ProfileEduction />
      {/* <ProfileSkills /> */}
    </Container>
  );
};

export default User;
