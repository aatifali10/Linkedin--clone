import { Grid, Container } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Feed from "./Feed";

const Home = ({ userData }) => {
  // console.log(auth);
  return (
    <>
      <Container>
        <Grid container spacing={2} mt={11}>
          <Grid item md={3} sm={12}>
            <Profile userData={userData} />
          </Grid>
          <Grid item md={6} sm={12}>
            <Post userData={userData} />
          </Grid>
          <Grid item md={3} sm={12}>
            <Feed userData={userData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
