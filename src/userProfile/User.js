import { Container } from "@mui/material";
import React from "react";
import ProfileAbout from "../components/ProfileAbout";
import ProfileActivity from "../components/ProfileActivity";
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
      {/* <ProfileSkills /> */}
    </Container>
  );
};

export default User;
