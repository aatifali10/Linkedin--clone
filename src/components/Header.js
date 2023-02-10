import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
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

export default function Header() {
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
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
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
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// import { IconButton } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import styled from "styled-components";

// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { useContext } from "react";
// import { ColorModeContext } from "../theme/ThemeContext";

// const Header = () => {
//   const theme = useTheme();
//   const { toggleColorMode } = useContext(ColorModeContext);

//   return (
//     <>
//       <Container>
//         <Content>
//           <Logo>
//             <a href="/home">
//               <img src="/images/home-logo.svg" alt="" />
//             </a>
//           </Logo>
//           <Search>
//             <div>
//               <input type="text" placeholder="Search" />
//             </div>
//             <SearchIcon>
//               <img src="/images/search-icon.svg" alt="" />
//             </SearchIcon>
//           </Search>
//           <Nav>
//             <NavListWrap>
//               <NavList className="active">
//                 <a href="/home">
//                   <img src="/images/nav-home.svg" alt="" />
//                   <span>Home</span>
//                 </a>
//               </NavList>

//               <NavList>
//                 <a href="/home">
//                   <img src="/images/nav-network.svg" alt="" />
//                   <span>My Network</span>
//                 </a>
//               </NavList>

//               <NavList>
//                 <a href="/home">
//                   <img src="/images/nav-jobs.svg" alt="" />
//                   <span>Jobs</span>
//                 </a>
//               </NavList>

//               <NavList>
//                 <a href="/home">
//                   <img src="/images/nav-messaging.svg" alt="" />
//                   <span>Messaging</span>
//                 </a>
//               </NavList>

//               <NavList>
//                 <a href="/home">
//                   <img src="/images/nav-notifications.svg" alt="" />
//                   <span>Notifications</span>
//                 </a>
//               </NavList>

//               <User>
//                 <a href="/home">
//                   <ImgProfile src="/images/user.svg" alt="" />
//                   <span>Me</span>
//                   <ImgDrop src="/images/down-icon.svg" alt="" />
//                 </a>

//                 <SignOut>
//                   <a href="/home"> Sign Out</a>
//                 </SignOut>
//               </User>

//               <Work>
//                 <a href="/home">
//                   <ImgOption src="/images/nav-work.svg" alt="" />
//                   <span>
//                     Work
//                     <img src="/images/down-icon.svg" alt="" />
//                   </span>
//                 </a>
//               </Work>
//               <IconButton
//                 sx={{ ml: 1 }}
//                 onClick={toggleColorMode}
//                 color="inherit"
//               >
//                 {theme.palette.mode === "dark" ? (
//                   <Brightness7Icon />
//                 ) : (
//                   <Brightness4Icon />
//                 )}
//               </IconButton>
//             </NavListWrap>
//           </Nav>
//         </Content>
//       </Container>
//     </>
//   );
// };

// const Container = styled.div`
//   background-color: white;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//   left: 0;
//   padding: 10px 10px;
//   position: fixed;
//   top: 0;
//   width: 100vw;
//   z-index: 100;
//   @media (max-width: 768px) {
//     padding: 15px 15px;
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   min-height: 100%;
//   max-width: 1128px;
// `;

// const Logo = styled.span`
//   margin-right: 8px;
//   font-size: 0px;
//   @media (max-width: 768px) {
//   }
// `;

// const Search = styled.div`
//   opacity: 1;
//   flex-grow: 1;
//   position: relative;
//   & > div {
//     max-width: 280px;
//     input {
//       border: none;
//       box-shadow: none;
//       background-color: #eef3f8;
//       border-radius: 2px;
//       color: rgba(0, 0, 0, 0.9);
//       width: 245px;
//       padding: 0 8px 0 40px;
//       line-height: 1.75;
//       font-weight: 400;
//       font-size: 14px;
//       height: 34px;
//       border-color: #dce6f1;
//       vertical-align: text-top;
//     }
//   }
//   @media (max-width: 768px) {
//     border: 2px solid rgba(0, 0, 0, 0.3);
//     border-radius: 999px;
//     input {
//       width: 245px;
//     }
//   }
// `;

// const SearchIcon = styled.div`
//   width: 40px;
//   position: absolute;
//   z-index: 1;
//   top: 10px;
//   left: 2px;
//   border-radius: 0 2px 2px 0;
//   margin: 0;
//   pointer-events: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Nav = styled.nav`
//   margin-left: auto;
//   display: block;
//   @media (max-width: 768px) {
//     position: fixed;
//     left: 0;
//     bottom: 0;
//     background: white;
//     width: 100%;
//     border-top: 1px solid rgba(0, 0, 0, 0.3);
//     margin-right: 40px;
//     margin: 0;
//     align-items: center;
//   }
// `;

// const NavListWrap = styled.ul`
//   display: flex;
//   flex-wrap: nowrap;
//   list-style-type: none;
//   .active {
//     span:after {
//       content: "";
//       transform: scaleX(1);
//       border-bottom: 2px solid var(--white, #fff);
//       bottom: 0;
//       left: 0;
//       position: absolute;
//       transition: transform 0.2s ease-in-out;
//       width: 100%;
//       border-color: rgba(0, 0, 0, 0.9);
//     }
//   }
// `;

// const NavList = styled.li`
//   display: flex;
//   align-items: center;
//   a {
//     align-items: center;
//     background: transparent;
//     display: flex;
//     flex-direction: column;
//     font-size: 12px;
//     font-weight: 400;
//     justify-content: center;
//     line-height: 1.5;
//     min-height: 52px;
//     min-width: 80px;
//     position: relative;
//     text-decoration: none;
//     span {
//       color: rgba(0, 0, 0, 0.6);
//       display: flex;
//       align-items: center;
//     }
//     @media (max-width: 768px) {
//       img {
//         position: relative;
//         top: 3px;
//       }
//       span {
//         visibility: hidden;
//       }
//       min-width: 70px;
//     }
//   }
//   &:hover,
//   &:active {
//     a {
//       span {
//         color: rgba(0, 0, 0, 0.9);
//       }
//     }
//   }
// `;

// const SignOut = styled.div`
//   position: absolute;
//   top: 45px;
//   background: white;
//   border-radius: 0 0 5px 5px;
//   width: 100px;
//   height: 40px;
//   font-size: 16px;
//   transition-duration: 167ms;
//   text-align: center;
//   display: none;
// `;

// const User = styled(NavList)`
//   a > svg {
//     width: 24px;
//     border-radius: 50%;
//   }
//   a > img {
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
//   }
//   span {
//     display: flex;
//     align-items: center;
//   }
//   &:hover {
//     ${SignOut} {
//       align-items: center;
//       display: flex;
//       justify-content: center;
//     }
//   }
// `;

// const ImgProfile = styled.img`
//   position: relative;
//   top: 5px;
// `;

// const ImgDrop = styled.img`
//   position: relative;
// `;

// const Work = styled(User)`
//   border-left: 1px solid rgba(0, 0, 0, 0.08);
//   @media (max-width: 768px) {
//     position: absolute;
//     visibility: hidden;
//     overflow: hidden;
//   }
// `;

// const ImgOption = styled.img`
//   @media (max-width: 768px) {
//     visibility: hidden;
//   }
// `;

// export default Header;
