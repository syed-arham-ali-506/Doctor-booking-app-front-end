import {
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GradeIcon from "@mui/icons-material/Grade";
import temp_doc_1 from "../../../assets/temp/temp_doc_1.png";
import temp_doc_2 from "../../../assets/temp/temp_doc_2.png";
import temp_doc_3 from "../../../assets/temp/temp_doc_3.png";

const best_doctors = [
  {
    id: 1,
    image: temp_doc_1,
    expertise: "neurologist",
    rating: 17,
    location: "Bengkulu",
    name: "Chopper",
  },
  {
    id: 2,
    image: temp_doc_2,
    expertise: "dermatologist",
    rating: 2,
    location: "International Hospital",
    name: "Dr Kureha",
  },
  {
    id: 3,
    image: temp_doc_3,
    expertise: "dermatologist",
    rating: 2,
    location: "Bengkulu, Indonesia Hospital",
    name: "Dr Stone",
  },
];

const Best_Doctors = () => {
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
          Our Great Doctors
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          aliquid quibusdam perferendis quam ullam optio impedit fuga, vitae
          enim reiciendis! Soluta quae rem natus perspiciatis
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: { md: 8, xs: 5 },
        }}
      >
        {best_doctors.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              my: { xs: 5 },
              border: "none",
              boxShadow: "none",

              mx: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt="image"
                image={item.image}
                sx={{
                  objectFit: "none",
                  borderRadius: 2,
                }}
              />
            </Box>
            <CardContent sx={{ px: 0 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 600 }}
              >
                {item.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: 17,
                    textAlign: "center",
                    alignContent: "center",
                    color: "#01B5C5",
                    bgcolor: "#d1fcfb",
                    height: 40,
                    width: 150,
                    borderRadius: 1,
                  }}
                >
                  {item.expertise}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#4E545F",
                    gap: 1,
                    fontSize: 18,
                  }}
                >
                  <GradeIcon sx={{ color: "#ffd919" }} />({item.rating})
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between", px: 0 }}
            >
              <Typography sx={{ color: "gray", fontSize: 13 }}>
                at {item.location}
              </Typography>
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
export default Best_Doctors;
