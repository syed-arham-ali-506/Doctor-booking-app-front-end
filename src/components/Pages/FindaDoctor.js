import { Box, Button, TextField, Typography } from "@mui/material";

const FindaDoctor = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
        Find a Doctor
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextField
          fullWidth
          label="Search by Name or Specification"
          sx={{ mr: 1, borderRadius: 0 }}
        />
        <Button variant="contained">Search</Button>
      </Box>
    </Box>
  );
};
export default FindaDoctor;
