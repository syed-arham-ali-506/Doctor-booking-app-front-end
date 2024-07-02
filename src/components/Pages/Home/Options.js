import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import doctor_icon from "../../../assets/doctor_icon.png";
import appointment_icon from "../../../assets/appointment_icon.png";
import location_icon from "../../../assets/location_icon.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const card_items = [
  {
    id: 1,
    image: doctor_icon,
    title: "Find a Doctor",
    card_content:
      "World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to clinic.",
  },
  {
    id: 2,
    image: location_icon,
    title: "Find a Location",
    card_content:
      "World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to clinic.",
  },
  {
    id: 3,
    image: appointment_icon,
    title: "Book Appointment",
    card_content:
      "World-Class care for everyone. Our health system offers unmatched, expert health care. From the lab to clinic.",
  },
];

const Options = () => {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 10,
        mx: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 600, textAlign: "center", width: { md: 500 } }}
        >
          Providing the best medical services
        </Typography>
        <Typography
          sx={{
            fontWeight: 30,
            lineHeight: 1.7,
            color: "grey",
            fontSize: 18,
            opacity: 1,
            pt: 2,
            textAlign: "center",
            width: { md: 550 },
          }}
        >
          World-Class care for everyone. Our health system offers unmatched,
          expert health care.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { md: "flex" },
          justifyContent: { md: "space-around" },
          mt: { md: 8, xs: 5 },
        }}
      >
        {card_items.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: { md: 300 },
              display: "flex",
              flexDirection: "column",
              my: { xs: 5 },
              border: "none",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
              }}
            >
              <CardMedia
                component="img"
                alt="image"
                image={item.image}
                sx={{
                  objectFit: "none",
                }}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", fontWeight: 600 }}
              >
                {item.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "10" }}
              >
                {item.card_content}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton
                sx={{
                  borderRadius: 20,
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                <ArrowForwardIcon sx={{ color: "black", fontWeight: 100 }} />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default Options;
