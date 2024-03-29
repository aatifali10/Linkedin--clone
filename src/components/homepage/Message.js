import React, { useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import Divider from "@mui/material/Divider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModalPost from "./ModalPost";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1.5),
    width: "auto",
    backgroundColor: theme.palette.background.default,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Message = ({ userData }) => {
  const PostRef = useRef(null);

  return (
    <>
      <Paper
        padding="20px"
        style={{ padding: "10px 20px", marginBottom: "10px" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={
              userData?._document?.data.value.mapValue.fields.profile_img
                .stringValue
            }
            alt="logo"
            height={50}
            style={{ borderRadius: "100px" }}
          />
          <Search style={{ width: "100%", borderRadius: "100px" }}>
            <StyledInputBase
              onClick={() => PostRef.current?.click()}
              placeholder="Start a post"
              inputProps={{ "aria-label": "Start a post" }}
            />
          </Search>
        </Stack>
        <ModalPost ref={PostRef} />
        <Stack direction="row" spacing={5} mt={2}>
          <Stack direction="row" spacing={1}>
            <PhotoSizeSelectActualIcon />
            <Typography>Photo</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <SmartDisplayIcon />
            <Typography>Video</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <EventIcon />
            <Typography>Audio event</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <ArticleIcon />
            <Typography>Write article</Typography>
          </Stack>
        </Stack>
      </Paper>
      <Stack direction="row" spacing={1} style={{ paddingBottom: "20px" }}>
        <Divider style={{ width: "81%", height: "13px" }} />

        <Typography>Sort by:</Typography>
        <ArrowDropDownIcon color="secondary" />
      </Stack>
    </>
  );
};

export default Message;
