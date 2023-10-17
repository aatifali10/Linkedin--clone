import { Paper, Box, Typography, Stack, Divider } from "@mui/material";
import Message from "./Message";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import RepeatIcon from "@mui/icons-material/Repeat";

export default function Post() {
  return (
    <>
      <Message />
      <Paper
        padding="20px"
        style={{ padding: "10px 20px", marginBottom: "10px" }}
      >
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
        <Stack>
          <Typography>Company Name</Typography>
          <Typography>
            - PPC Specialist (2-3 Years of Exp) (U.S Region) - Brand Specialist
            (3+ Years of Exp) - Content Writer (2-3 Years of Exp) - Project
            Coordinator (1-3 Years of Exp) - Associate Software Engineer
            (Preferred Language Dot Net) (6 months-1 Year of Exp) - Software
            Engineer (Preferred Language Dot Net) (1-3 Year of Exp) - Software
            Engineering Intern (Backend) - Sales Executive (Bark Platform) (1-3
            Years of Exp)
          </Typography>
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
        </Stack>
      </Paper>
    </>
  );
}
