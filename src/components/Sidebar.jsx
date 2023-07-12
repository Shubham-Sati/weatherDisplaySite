import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
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
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import { Routes, Route, HashRouter } from "react-router-dom";

import logo from "../assets/tornado.png";
import Home from "./Home";
import Favourite from "./Favourite";

const drawerWidth = 70;

function Sidebar({ setQuery }) {
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
        <ListItem
          key={"text"}
          disablePadding
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"text"} placement="right">
                <HomeTwoToneIcon
                  sx={{
                    fontSize: "30px",
                    color: "var(--lightBlue)",
                  }}
                />
              </Tooltip>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"text"} placement="right">
                <FavoriteTwoToneIcon
                  sx={{ fontSize: "30px", color: "var(--lightBlue)" }}
                />
              </Tooltip>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"text"} placement="right">
                <AddLocationTwoToneIcon
                  sx={{ fontSize: "30px", color: "var(--lightBlue)" }}
                />
              </Tooltip>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"text"} placement="right">
                <CalendarMonthTwoToneIcon
                  sx={{ fontSize: "30px", color: "var(--lightBlue)" }}
                />
              </Tooltip>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title={"text"} placement="right">
                <SettingsTwoToneIcon
                  sx={{ fontSize: "30px", color: "var(--lightBlue)" }}
                />
              </Tooltip>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        display: { sm: "flex" },
      }}
    >
      <HashRouter>
        <Toolbar>
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
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
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
          }}
        >
          <Routes>
            <Route path="/">
              <Route index element={<Home setQuery={setQuery} />} />
              <Route path="Favourite" element={<Favourite />} />
            </Route>
          </Routes>
        </Box>
      </HashRouter>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
