import { Button, Stack, TextField, Typography } from "@mui/material";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { forwardRef } from "react";
import Modal from "react-modal";
import { auth, database } from "../../firebase/setup";
import { useState, useEffect } from "react";

import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalPost(props, ref) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "grey";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [text, setText] = useState("");
  const [userData, setUserData] = useState([]);

  const getUser = () => {
    setTimeout(async () => {
      try {
        const userDocument = doc(database, "users", `${auth.currentUser?.uid}`);
        const data = await getDoc(userDocument);
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  useEffect(() => {
    getUser();
  }, []);

  const addPost = async () => {
    const postDocument = doc(
      database,
      `users-${auth.currentUser?.uid}`,
      `${auth.currentUser?.uid}`
    );
    const postRef = doc(postDocument, "Posts", `${Math.random()}`);
    try {
      await setDoc(postRef, {
        textPost: text,
        username:
          userData._document?.data?.value.mapValue.fields.username.stringValue,
        designation:
          userData._document?.data?.value.mapValue.fields.designation
            .stringValue,
        profile_image:
          userData._document?.data?.value.mapValue.fields.profile_image
            .stringValue,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button ref={ref} onClick={openModal} style={{ display: "none" }}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Stack>
          <Button
            sx={{ display: "flex", justifyContent: "end" }}
            size="large"
            onClick={closeModal}
          >
            X
          </Button>
        </Stack>

        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          What do you want to talk about?
        </h2>
        <TextField
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "500px" }}
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
        />
        <br />
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
        <Button
          sx={{ mt: "10px" }}
          variant="outlined"
          size="small"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          sx={{ ml: "10px", mt: "10px" }}
          variant="contained"
          size="small"
          onClick={addPost}
        >
          Done
        </Button>
      </Modal>
    </div>
  );
}

export default forwardRef(ModalPost);
