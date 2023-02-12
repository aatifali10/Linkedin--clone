import { Grid, Container, Hidden } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Feed from "./Feed";

const Home = () => {
  return (
    <>
      <h1>Hellow world</h1>
      <Container>
        <Grid container spacing={2} mt={11}>
          <Hidden mdDown={true}>
            <Grid item md={2} sm={12}>
              <Profile />
            </Grid>
          </Hidden>
          <Hidden mdDown={true}>
            <Grid item md={6}>
              <Post />
            </Grid>
          </Hidden>
          <Hidden mdDown={true}>
            <Grid item md={4}>
              <Feed />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
