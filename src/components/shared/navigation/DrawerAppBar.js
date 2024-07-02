import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import medicare_logo from "../../../assets/medicare_logo.png";
import navbar_background from "../../../assets/navbar_background.png";
import user_icon from "../../../assets/user_icon.jpg";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { route_path: "/", text: "Home", id: 1 },
  {
    route_path: "/FindaDoctor",
    text: "Find a Doctor",
    id: 2,
  },
  { route_path: "/Services", text: "Services", id: 3 },
  { route_path: "/Contact", text: "Contact", id: 4 },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Medicare
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              to={item.route_path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          display: "block",
          height: 200,
        }}
      >
        <CssBaseline />
        <Avatar
          src={navbar_background}
          alt="Logo"
          sx={{
            height: 100,
            width: "100%",
            position: "fixed",
            zIndex: 1000,
            bgcolor: "white",
          }}
          variant="square"
        />

        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            height: 100,
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: 1001,
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "transparent",
            }}
          >
            <Typography component="div" sx={{ display: "flex" }}>
              <img src={medicare_logo} alt="Logo"></img>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component={Link}
                  to={item.route_path}
                  sx={{
                    color: "grey",
                    fontWeight: "bold",
                    "&:active": { fontWeight: "bold" },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: { xs: "space-between" },
                alignItems: "center",
                gap: 3,
                right: { xs: 0 },
              }}
            >
              <Box>
                <Avatar src={user_icon} alt="Logo"></Avatar>
              </Box>
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                anchor: "right",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default DrawerAppBar;
