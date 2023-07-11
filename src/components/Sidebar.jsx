import * as React from "react";
import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Tooltip } from "@mui/material";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/tornado.png";
import Home from "./Home";
import Favourite from "./Favourite";

const drawerWidth = 70;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "40px 0",
        }}
      >
        <img
          style={{ width: "50px", objectFit: "contain" }}
          src={logo}
          alt="notFound"
        />
        <p style={{ fontSize: "14px", fontWeight: "bold", marginTop: "2px" }}>
          NGIJIH
        </p>
      </div>

      <List>
        {["Home page", "Favourite"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundColor: "cyan",
                }}
              >
                <Tooltip title={text} placement="right">
                  {index % 2 === 0 ? (
                    <Link to="/">
                      <HomeTwoToneIcon
                        sx={{ fontSize: "30px", color: "var(--lightBlue)" }}
                      />
                    </Link>
                  ) : (
                    <Link to="/Favourite">
                      <FavoriteTwoToneIcon
                        sx={{ fontSize: "30px", color: "var(--lightRed)" }}
                      />
                    </Link>
                  )}
                </Tooltip>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: { sm: "flex" },
      }}
    >
      <HashRouter>
        {/* <CssBaseline /> */}
        {/* handburger icon for mobile */}
        <Toolbar
        // sx={{ backgroundColor: "red" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              m: 0,
              p: 0,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* below Box is for the drawer for PC and mobile */}
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                // width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                // width: drawerWidth,
                border: "none",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            m: 0,
            flexGrow: 1,
            pt: 2,
            // width: "100%",
            // backgroundColor: "red",
          }}
        >
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Favourite" element={<Favourite />} />
            </Route>
          </Routes>
        </Box>
      </HashRouter>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
