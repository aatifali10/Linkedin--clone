import { Grid, Container, Hidden } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Feed from "./Feed";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/setup";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [userdata, setUserdata] = useState([]);

  const getUser = async () => {
    try {
      const userDocument = doc(database, "U sers", `${auth.currentUser?.uid}`);
      const data = await getDoc(userDocument);
      setUserdata(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(auth);
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
            <Post userdata={userdata} />
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
