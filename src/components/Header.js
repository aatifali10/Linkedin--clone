import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Grid } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "../theme/ThemeContext";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Stack } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(25),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    backgroundColor: theme.palette.background.default,
  },
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 60px 0 60px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({ userData }) {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="primary">
            <MailIcon color="secondary" />
          </Badge>
          <p>Messages</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon color="secondary" />
          </Badge>
          <p>Notifications</p>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
          <p>Profile</p>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box
              component="img"
              src="/images/home-logo.svg"
              alt="logo"
              height={30}
            />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="secondary" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Grid
            sx={{ flexGrow: 1 }}
            item
            xs={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Box
            sx={{
              display: {
                xs: "none",
                margin: "10px",
                alignItems: "center",
                md: "flex",
              },
            }}
          >
            <Grid
              sx={{ flexGrow: 1 }}
              item
              xs={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Stack alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <HomeIcon color="secondary" />
                </Badge>
                <Typography variant="body2">Home</Typography>
              </Stack>
              <Stack alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <PeopleAltIcon color="secondary" />
                </Badge>
                <Typography variant="body2">My Network</Typography>
              </Stack>
              <Stack alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <WorkIcon color="secondary" />
                </Badge>
                <Typography variant="body2">Jobs</Typography>
              </Stack>
              <Stack alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <MailIcon color="secondary" />
                </Badge>
                <Typography variant="body2">Messaging</Typography>
              </Stack>
              <Stack alignItems="center">
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon color="secondary" />
                </Badge>
                <Typography variant="body2">Notifications</Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar>
                  <Box
                    component="img"
                    src={
                      userData?._document.data.value.mapValue.fields.profile_img
                        .stringValue
                    }
                    alt="logo"
                    width="100%"
                  />
                </Avatar>
                <Stack direction="row">
                  <Typography variant="body2">Me</Typography>
                  <ArrowDropDownIcon color="secondary" />
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <AppsIcon color="secondary" />
                <Stack direction={"row"}>
                  <Typography variant="body2">Work</Typography>
                  <ArrowDropDownIcon color="secondary" />
                </Stack>
              </Stack>
            </Grid>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Box
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon color="secondary" />
            </Box>
          </Box>
          <Box sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon color="secondary" />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
