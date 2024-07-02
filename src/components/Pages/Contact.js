import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [isValid, setIsValid] = useState(true);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 20,
      }}
    >
      <Typography
        sx={{
          fontSize: { md: 50, xs: 30 },
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          mb: 5,
        }}
      >
        <TextField fullWidth label="Your Email" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          mb: 5,
        }}
      >
        <TextField fullWidth label="Subject" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          height: 200,
          maxWidth: "100%",
          mb: 5,
        }}
      >
        <TextField
          fullWidth
          fullHeight
          label="Your message"
          id="fullWidth"
          type=""
          sx={{
            "& .MuiInputBase-root": {
              height: 200,
            },
          }}
        />
      </Box>

      <Button variant="contained" sx={{ height: 50, width: 120 }}>
        Submit
      </Button>
    </Box>
  );
};
export default Contact;
