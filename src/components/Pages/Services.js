import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const list_of_services = [
  {
    id: 1,
    service_name: "Cancer Care",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 3,
  },
  {
    id: 2,
    service_name: "Labor & Delivery",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 2,
  },
  {
    id: 3,
    service_name: "Heart & Vascular",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 4,
  },
  {
    id: 4,
    service_name: "Mental Health",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 5,
  },
  {
    id: 5,
    service_name: "Neurology",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 6,
  },
  {
    id: 6,
    service_name: "Burn Treatment",
    description:
      "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    no_of_doctors: 8,
  },
];

const Services = () => {
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
      <Typography
        variant="h3"
        sx={{ fontWeight: 600, textAlign: "center", width: { md: 500 } }}
      >
        Our Medical Services
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aliquid
        quibusdam perferendis quam ullam optio impedit fuga, vitae enim
        reiciendis! Soluta quae rem natus perspiciatis
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: { md: 8, xs: 5 },
        }}
      >
        {list_of_services.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              my: { xs: 5 },
              border: "none",
              boxShadow: "none",
              maxWidth: { md: 400 },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 600 }}
              >
                {item.service_name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: "10" }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                  bgcolor: "#d1fcfb",

                  borderRadius: 1,
                  width: 40,
                }}
              >
                <Typography sx={{ color: "#01B5C5" }}>
                  {item.no_of_doctors}
                </Typography>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default Services;
