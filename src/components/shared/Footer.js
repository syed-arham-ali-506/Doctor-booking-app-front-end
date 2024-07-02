import { Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import medicare_logo from "../../assets/medicare_logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const quickLinks = [
  { id: 1, content: "Home", route_path: "/" },
  { id: 2, content: "About", route_path: "/" },
  { id: 3, content: "Services", route_path: "/Services" },
];
const iWantTo = [
  { id: 1, content: "Find a Doctor", route_path: "/FindaDoctor" },
  { id: 1, content: "Request an appointment" },
  { id: 1, content: "Location" },
  { id: 1, content: "Get an Opinion" },
];
const services = [
  { id: 1, content: "Donate", route_path: "" },
  { id: 1, content: "Contact Us", route_path: "/Contact" },
];

const footer_Column_Container_Styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  mb: { xs: 7 },
};

const footer_column_heading_styles = {
  ml: 1,
  fontSize: 25,
};

const Footer = () => {
  const iconButtonStyles = {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    colo: "black",
  };

  const iconStyles = {
    color: "black",
    fontSize: 18,
  };

  return (
    <Box
      sx={{
        mx: 5,
        display: "flex",
        flexWrap: { md: "wrap" },
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", mb: { xs: 7 } }}>
        <Avatar
          src={medicare_logo}
          alt="Logo"
          variant="square"
          sx={{ objectFit: "none", width: 150, height: 25, mb: 3 }}
        ></Avatar>
        <Typography sx={{ fontWeight: 500, color: "#4E545F", mb: 3 }}>
          Copyright 2024 developed by Syed Arham Ali.
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: 165 }}
        >
          <IconButton aria-label="youtube" size="medium" sx={iconButtonStyles}>
            <YouTubeIcon sx={iconStyles} />
          </IconButton>
          <IconButton aria-label="github" size="medium" sx={iconButtonStyles}>
            <GitHubIcon sx={iconStyles} />
          </IconButton>
          <IconButton aria-label="facebook" size="medium" sx={iconButtonStyles}>
            <FacebookIcon sx={iconStyles} />
          </IconButton>
          <IconButton aria-label="linkedin" size="medium" sx={iconButtonStyles}>
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={footer_Column_Container_Styles}>
        <Typography sx={footer_column_heading_styles}>Quick Links</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {quickLinks.map((item) => (
            <Button
              key={item.id}
              sx={{
                color: "grey",
                fontWeight: 100,
              }}
            >
              {item.content}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={footer_column_heading_styles}>I Want to</Typography>
        <Box sx={footer_Column_Container_Styles}>
          {iWantTo.map((item) => (
            <Button
              key={item.id}
              // component={Link}
              // to={item.route_path}
              sx={{
                color: "grey",
                fontWeight: 100,
              }}
            >
              {item.content}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={footer_column_heading_styles}>Support</Typography>
        <Box sx={footer_Column_Container_Styles}>
          {services.map((item) => (
            <Button
              key={item.id}
              // component={Link}
              // to={item.route_path}
              sx={{
                color: "grey",
                fontWeight: 100,
              }}
            >
              {item.content}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
