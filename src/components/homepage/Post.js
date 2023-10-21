import { Box, Typography, Stack, Divider } from "@mui/material";
import Message from "./Message";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import RepeatIcon from "@mui/icons-material/Repeat";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ahmed from "../../images/ahmed.jpg";

export default function Post({ userData }) {
  console.log(userData._document);
  return (
    <>
      <Message />

      <Card>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src="https://pbs.twimg.com/profile_images/1617828531039539200/MHdha04v_400x400.jpg"
              alt="logo"
              height={50}
              style={{ borderRadius: "100px" }}
            />
            <Stack>
              <Typography variant="h3">Ahmed Shahzad</Typography>
              <Typography variant="p">Crickter</Typography>
              <Typography variant="p">1h</Typography>
            </Stack>
          </Stack>
          <Typography variant="h5">Description</Typography>
        </CardContent>
        <CardMedia component="img" height={300} image={ahmed}></CardMedia>
        <Divider />

        <Stack direction="row" spacing={9} mt={2}>
          <Stack direction="row" spacing={1}>
            <ThumbUpIcon />
            <Typography>Like</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <MessageIcon />
            <Typography>Comment</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <RepeatIcon />
            <Typography>Repost</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <SendIcon />
            <Typography>Share</Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
