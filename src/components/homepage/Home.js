import { Grid, Container, Hidden } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Feed from "./Feed";

const Home = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} mt={11}>
          {/* <Hidden mdDown={true}> */}
          <Grid item md={3} sm={12}>
            <Profile />
          </Grid>
          {/* </Hidden> */}
          {/* <Hidden mdDown={true}> */}
          <Grid item md={6} sm={12}>
            <Post />
          </Grid>
          {/* </Hidden> */}
          {/* <Hidden mdDown={true}> */}
          <Grid item md={3} sm={12}>
            <Feed />
          </Grid>
          {/* </Hidden> */}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
