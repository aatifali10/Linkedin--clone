import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import linkedinlogo from "./linkedinlogo.png";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";

const Signin = () => {
  const [username, setUsername] = useState("");
  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <img src={linkedinlogo} alt="linkdIn" style={{ width: "130px" }} />
          <div>
            <Typography style={{ fontSize: "50px", margin: "20px 0" }}>
              Find jobs through your community
            </Typography>
            <Typography variant="h6">Email or phone</Typography>

            <TextField
              label="Email or Phone"
              variant="outlined"
              style={{ width: "400px" }}
            ></TextField>
            <Typography variant="h6">Password</Typography>
            <TextField
              onChange={() => setUsername(e.target.value)}
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
