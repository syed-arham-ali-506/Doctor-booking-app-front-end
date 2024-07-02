import { Avatar, Box, Button, Typography } from "@mui/material";
import doctor_img1 from "../../../assets/doctor_img1.png";
import doctor_img2 from "../../../assets/doctor_img2.png";
import doctor_img3 from "../../../assets/doctor_img3.png";

const Introduction = () => {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        my: 10,
        mx: 5,
      }}
    >
      <Box sx={{ width: { md: "60%" }, pr: { md: 10 }, pb: { xs: 10 } }}>
        <Typography variant="h1" sx={{ fontSize: 60, fontWeight: 600 }}>
          We help patients live a healthy, longer life.
        </Typography>
        <Typography
          sx={{
            fontWeight: 30,
            lineHeight: 1.7,
            color: "grey",
            fontSize: 18,
            opacity: 1,
            pt: 2,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          mollitia eveniet ipsum aperiam illum. Fuga quam assumenda repellendus
          enim tempore facilis, error veniam, vitae, tempora nostrum quaerat
          similique repellat. Aperiam?
        </Typography>
        <Button
          sx={{
            opacity: 1,
            bgcolor: "#0067FF",
            color: "white",
            borderRadius: 50,
            py: 1.5,
            px: 4,
            fontWeight: 300,
            mt: 5,
            "&:hover": {
              bgcolor: "#0067FF",
              boxShadow: "none",
              opacity: 1,

              color: "white",
            },
          }}
        >
          Request an Appointment
        </Button>
        <Box sx={{ mt: 8, display: { md: "flex" }, gap: { md: 10 } }}>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, transform: "translate(0, 15px)" }}
            >
              30+
            </Typography>
            <Box
              sx={{
                bgcolor: "#FEB60D",
                borderRadius: "50px",
                height: 8,
                width: 110,
              }}
            ></Box>
            <Typography
              sx={{
                fontWeight: 30,
                lineHeight: 1.7,
                color: "grey",
                fontSize: 18,
                opacity: 1,
                pt: 2,
              }}
            >
              Years of Experience
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, transform: "translate(0, 15px)" }}
            >
              15+
            </Typography>
            <Box
              sx={{
                bgcolor: "#9771FF",
                borderRadius: "50px",
                height: 8,
                width: 110,
              }}
            ></Box>
            <Typography
              sx={{
                fontWeight: 30,
                lineHeight: 1.7,
                color: "grey",
                fontSize: 18,
                opacity: 1,
                pt: 2,
              }}
            >
              Clinic Location
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, transform: "translate(0, 15px)" }}
            >
              100%
            </Typography>
            <Box
              sx={{
                bgcolor: "#01B5C5",
                borderRadius: "50px",
                height: 8,
                width: 110,
              }}
            ></Box>
            <Typography
              sx={{
                fontWeight: 30,
                lineHeight: 1.7,
                color: "grey",
                fontSize: 18,
                opacity: 1,
                pt: 2,
              }}
            >
              Patient Satisfaction
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: { md: 200 },
          flexGrow: 1,
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "55%",
            height: "80%",

            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: "100%",
              borderRadius: 5,
              height: "auto",
              objectFit: "cover",
            }}
            alt="image"
            src={doctor_img1}
            variant="rounded"
          ></Avatar>
        </Box>
        <Box
          sx={{
            width: "45%",
            display: "flex",

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", width: "100%" }}>
            <Avatar
              sx={{
                width: "100%",
                borderRadius: 5,
                height: "auto",
                objectFit: "cover",
              }}
              alt="image"
              src={doctor_img2}
              variant="rounded"
            ></Avatar>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Avatar
              sx={{
                width: "100%",
                borderRadius: 5,
                height: "auto",
                objectFit: "cover",
              }}
              alt="image"
              src={doctor_img3}
              variant="rounded"
            ></Avatar>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Introduction;
