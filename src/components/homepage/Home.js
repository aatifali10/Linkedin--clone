import { Grid, Container } from "@mui/material";
import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import Feed from "./Feed";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../firebase/setup";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    setTimeout(async () => {
      try {
        const userDocument = doc(database, "users", `${auth.currentUser?.uid}`);
        const data = await getDoc(userDocument);
        setUserData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  useEffect(() => {
    getUser();
  }, []);

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
            <Feed />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
