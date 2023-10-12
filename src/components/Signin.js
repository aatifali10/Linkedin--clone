import { Grid, Typography, TextField } from "@mui/material";
import React from "react";
import linkedinlogo from "./linkedinlogo.png";

const Signin = () => {
  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <img src={linkedinlogo} alt="linkdIn" style={{ width: "130px" }} />
          <div>
            <Typography style={{ fontSize: "50px" }}>
              Find jobs through your community
            </Typography>
            <label> Email or Phone</label>
            <TextField style={{ width: "400px" }}></TextField>
            <label>Password</label>
            <TextField style={{ width: "400px" }}></TextField>
          </div>
        </Grid>
        <Grid xs={6}>Social Icons</Grid>
      </Grid>
    </>
  );
};

export default Signin;
