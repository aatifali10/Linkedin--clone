import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

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
        <Stack direction="row" spacing={20}>
          <List direction="row">
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Box>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" color="text.primary">
                      Ali Connors
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                  }
                />
                <MuiButton
                  variant="outlined"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  follow
                </MuiButton>
              </Box>
            </ListItem>
          </List>
          <List direction="row">
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Box>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" color="text.primary">
                      Ali Connors
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                  }
                />
                <MuiButton
                  variant="outlined"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  follow
                </MuiButton>
              </Box>
            </ListItem>
          </List>
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <List direction="row">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Box>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" color="text.primary">
                    Ali Connors
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                }
              />
              <MuiButton
                variant="outlined"
                color="secondary"
                startIcon={<AddIcon />}
              >
                follow
              </MuiButton>
            </Box>
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List direction="row">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Box>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" color="text.primary">
                    Ali Connors
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                }
              />
              <MuiButton
                variant="outlined"
                color="secondary"
                startIcon={<AddIcon />}
              >
                follow
              </MuiButton>
            </Box>
          </ListItem>
        </List>
      </TabPanel>
    </Paper>
  );
}
