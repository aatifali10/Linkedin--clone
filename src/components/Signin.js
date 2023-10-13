import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import linkedinlogo from "./linkedinlogo.png";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, database, googleProvider } from "../firebase/setup";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [username, setUsername] = useState("");

  const userAdd = async () => {
    const userRef = collection(database, "users");
    try {
      await addDoc(userRef, {
        username: username,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SignInWithGoogle = async () => {
    !username && toast.warning("Please enter user name");
    try {
      username && (await signInWithPopup(auth, googleProvider));
      userAdd();
      setUsername("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Grid container>
        <ToastContainer autoClose={2000} position="top-right" />
        <Grid xs={6}>
          <img src={linkedinlogo} alt="linkdIn" style={{ width: "130px" }} />
          <div>
            <Typography style={{ fontSize: "50px", margin: "20px 0" }}>
              Find jobs through your community
            </Typography>
            <Typography variant="h6">Email or phone</Typography>

            <TextField
              onChange={(e) => setUsername(e.target.value)}
              label="Email or Phone"
              variant="outlined"
              style={{ width: "400px" }}
            ></TextField>
            <Typography variant="h6">Password</Typography>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              label="Password"
              variant="outlined"
              style={{ width: "400px" }}
            ></TextField>
            <br />
            <Link>Forget Password ?</Link>
            <br />
            <Button
              variant="contained"
              style={{
                width: "400px",
                borderRadius: "30px",
                marginTop: "20px",
                padding: "10px 0",
              }}
              onClick={SignInWithGoogle}
            >
              Sign In
            </Button>
          </div>
          <Typography variant="h6">
            By clicking Continue, you agree to LinkedIn’s User Agreement,
            Privacy Policy, and Cookie Policy.
          </Typography>
          <Button></Button>
          <br />
          <Button></Button>
        </Grid>
        <Grid xs={6}>Social Icons</Grid>
      </Grid>
    </>
  );
};

export default Signin;
