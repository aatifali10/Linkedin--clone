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
import { useState, useEffect } from "react";

import { collection, doc, getDocs } from "firebase/firestore";
import { auth, database } from "../../firebase/setup";

export default function Post({ userData }) {
  const [posts, setPosts] = useState([]);

  const [menu, setMenu] = useState("");
  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  const getPost = async () => {
    setTimeout(async () => {
      const postDocument = doc(
        database,
        `users-${auth.currentUser?.uid}`,
        `${auth.currentUser?.uid}`
      );
      const postRef = collection(postDocument, "Posts");
      try {
        const data = await getDocs(postRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(filterData);
      } catch (err) {
        console.error(err);
      }
    }, 1000);
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(posts);
  return (
    <>
      <Message userData={userData} />

      <Card>
        {posts.map((post) => {
          return (
            <>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Box
                    component="img"
                    src={
                      userData?._document?.data.value.mapValue.fields
                        .profile_img.stringValue
                    }
                    alt="logo"
                    height={50}
                    style={{ borderRadius: "100px" }}
                  />
                  <Stack>
                    <Typography variant="h3">
                      {
                        userData?._document?.data.value.mapValue.fields.username
                          .stringValue
                      }
                    </Typography>
                    <Typography variant="p">
                      {
                        userData?._document?.data.value.mapValue.fields
                          .designation.stringValue
                      }
                    </Typography>
                    <Typography variant="p">1h</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h5">{post.textPost}</Typography>
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
            </>
          );
        })}
      </Card>
    </>
  );
}
