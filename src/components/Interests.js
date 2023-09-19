import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

const People = [
  {
    name: "Atomic Energy Central School",
    img: "/images/NoImage.png",
    title: "16,430 followers",
    button: "Follow",
  },
  {
    name: "Indian Institute of Technology, Bombay",
    img: "/images/India.jpg",
    title: "361,471 followers",
    button: "Message",
  },
];
const Groups = [
  {
    name: "IIT Bombay Aalumni (Official)",
    img: "/images/iit.jpg",
    title: "11,830 followers",
    button: "Join",
  },
  {
    name: "International Physics Olympiad Alumni",
    img: "/images/olympiad.jpg",
    title: "999 followers",
    button: "Join",
  },
];
const Schools = [
  {
    name: "Stanford University",
    img: "/images/Stanford-uni.jpg",
    title: "1,164,876 followers",
    button: "Follow",
  },
  {
    name: "Indian Institute of Technology, Bombay",
    img: "/images/India.jpg",
    title: "361,471 followers",
    button: "follow",
  },
];

const MuiButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  "& .MuiButton-startIcon": {
    marginRight: 4,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Interests() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ mt: 1, p: 2.5 }}>
      <Typography variant="h3">Interests</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Companies" {...a11yProps(0)} />
          <Tab label="Groups" {...a11yProps(1)} />
          <Tab label="Schools" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack direction="row" spacing={5}>
          {People.map(({ name, img, title, button }, i) => (
            <Fragment key={name + "key" + i}>
              <Stack>
                <Stack direction="row" mt={1.5}>
                  <Box
                    component="img"
                    src={img}
                    alt="logo"
                    height={50}
                    style={{ borderRadius: "100px" }}
                  />
                  <Stack>
                    <Stack ml={2}>
                      <Typography variant="subtitle1">{name}</Typography>
                      <Typography variant="subtitle2">{title}</Typography>
                    </Stack>
                    <MuiButton
                      variant="outlined"
                      color="secondary"
                      style={{
                        borderRadius: "50px",
                        marginTop: "10px",
                        width: "100px",
                        marginLeft: "17px",
                      }}
                      startIcon={<AddIcon />}
                    >
                      {button}
                    </MuiButton>
                  </Stack>
                </Stack>
              </Stack>

              <Divider />
            </Fragment>
          ))}
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Stack direction="row" spacing={5}>
          {Groups.map(({ name, img, title, button }, i) => (
            <Fragment key={name + "key" + i}>
              <Stack>
                <Stack direction="row" mt={1.5}>
                  <Box
                    component="img"
                    src={img}
                    alt="logo"
                    height={50}
                    style={{ borderRadius: "100px" }}
                  />
                  <Stack>
                    <Stack ml={2}>
                      <Typography variant="subtitle1">{name}</Typography>
                      <Typography variant="subtitle2">{title}</Typography>
                    </Stack>
                    <MuiButton
                      variant="outlined"
                      color="secondary"
                      style={{
                        borderRadius: "50px",
                        marginTop: "10px",
                        width: "100px",
                        marginLeft: "17px",
                      }}
                      startIcon={<AddIcon />}
                    >
                      {button}
                    </MuiButton>
                  </Stack>
                </Stack>
              </Stack>
              {/* <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                ></Box> */}

              <Divider />
            </Fragment>
          ))}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack direction="row" spacing={5}>
          {Schools.map(({ name, img, title, button }, i) => (
            <Fragment key={name + "key" + i}>
              <Stack>
                <Stack direction="row" mt={1.5}>
                  <Box
                    component="img"
                    src={img}
                    alt="logo"
                    height={50}
                    style={{ borderRadius: "100px" }}
                  />
                  <Stack>
                    <Stack ml={2}>
                      <Typography variant="subtitle1">{name}</Typography>
                      <Typography variant="subtitle2">{title}</Typography>
                    </Stack>
                    <MuiButton
                      variant="outlined"
                      color="secondary"
                      style={{
                        borderRadius: "50px",
                        marginTop: "10px",
                        width: "100px",
                        marginLeft: "17px",
                      }}
                      startIcon={<AddIcon />}
                    >
                      {button}
                    </MuiButton>
                  </Stack>
                </Stack>
              </Stack>
              {/* <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                ></Box> */}

              <Divider />
            </Fragment>
          ))}
        </Stack>
      </TabPanel>
    </Paper>
  );
}
