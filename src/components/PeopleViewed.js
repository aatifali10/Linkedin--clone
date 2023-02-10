import React, { Fragment } from "react";
import { Paper, Typography, Stack, Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import MuiButton from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddOutlined";

const People = [
  {
    name: "Drew Houston",
    img: "/images/Drew.jpg",
    title: "CEO, Dropbox",
    Button: [
      {
        img: "/images/plus.png",
        title: "Follow",
      },
    ],
  },
  {
    name: "Ned Segal",
    img: "/images/ned.jpg",
    title: "Former CFO at Twitter",
    Button: [
      {
        img: "/images/lock.png",
        title: "Message",
      },
    ],
  },
  {
    name: "Reed Hastings",
    img: "/images/reed.jpg",
    title: "Chairman Netflix",
    Button: [
      {
        img: "/images/plus.png",
        title: "Follow",
      },
    ],
  },
  {
    name: "Susan Wojcicki",
    img: "/images/susan.jpg",
    title: "CEO of Youtube",
    Button: [
      {
        img: "/images/lock.png",
        title: "Message",
      },
    ],
  },
  {
    name: "Neha Parikh ",
    img: "/images/neha.jpg",
    title: "CEO at Waze",
    Button: [
      {
        img: "/images/plus.png",
        title: "Follow",
      },
    ],
  },
];

const PeopleViewed = () => {
  return (
    <Paper sx={{ p: 2.5 }}>
      <Typography variant="h3">People also viewed</Typography>
      {People.map(({ name, img, title, Button }, i) => (
        <Fragment key={name + "key" + i}>
          <Stack direction={"row"} mt={1.5}>
            <Box
              component="img"
              src={img}
              alt="logo"
              height={50}
              style={{ borderRadius: "100px" }}
            />
            <Stack ml={2}>
              <Typography variant="subtitle1">{name}</Typography>
              <Typography variant="subtitle2">{title}</Typography>
            </Stack>
          </Stack>
          {Button.map(({ title, img }, i) => (
            <Container
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                width: "50%",
                padding: "5px ",
                height: "auto",
                marginTop: "12px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <Stack direction={"row"} key={title + i}>
                <MuiButton
                  variant="outlined"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  {img}
                </MuiButton>
                <Box component="img" src={img} height={20} />
                <Typography variant="subtitle2" ml={1}>
                  {title}
                </Typography>
              </Stack>
            </Container>
          ))}
          <Divider />
        </Fragment>
      ))}
    </Paper>
  );
};

export default PeopleViewed;

// const skills = [
//   {
//     title: "Algorithm",
//     endorseement: [
//       {
//         img: "/images/People.jpg",
//         title:
//           "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
//       },
//       {
//         img: "/images/Twitter.jpg",
//         title: "Endorsed by 5 colleagues at Twitter",
//       },
//       {
//         img: "/images/NoImage.png",
//         title: "8 endorsements",
//       },
//     ],
//   },
//   {
//     title: "Algorithm",
//     endorseement: [
//       {
//         img: "/images/People.jpg",
//         title:
//           "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
//       },
//       {
//         img: "/images/Twitter.jpg",
//         title: "Endorsed by 5 colleagues at Twitter",
//       },
//       {
//         img: "/images/NoImage.png",
//         title: "8 endorsements",
//       },
//     ],
//   },
//   {
//     title: "Algorithm",
//     endorseement: [
//       {
//         img: "/images/People.jpg",
//         title:
//           "Endorsed by Antoine Atallah and 2 others who are highly skilled at this",
//       },
//       {
//         img: "/images/Twitter.jpg",
//         title: "Endorsed by 5 colleagues at Twitter",
//       },
//       {
//         img: "/images/NoImage.png",
//         title: "8 endorsements",
//       },
//     ],
//   },
// ];
// const PeopleViewed = () => {
//   return (
//     <Paper sx={{ mt: 1, p: 2.5 }}>
//       <Typography variant="h3">Skills</Typography>
//       {skills.map(({ title, endorseement }, i) => (
//         <Fragment key={title + "key" + i}>
//           <Typography variant="subtitle1" sx={{ mt: 2 }}>
//             {title}
//           </Typography>
//           {endorseement.map(({ title, img }, i) => (
//             <Stack direction={"row"} key={title + i} alignItems="center" my={2}>
//               <Box component="img" src={img} alt={title + "logo"} height={30} />
//               <Typography variant="body2" ml={1}>
//                 {title}
//               </Typography>
//             </Stack>
//           ))}
//           <Divider />
//         </Fragment>
//       ))}
//     </Paper>
//   );
// };

// export default PeopleViewed;
