import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import patient_temp from "../../../assets/temp/patient_temp.jpg";

const best_reviews = [
  {
    id: 1,
    image: patient_temp,
    name: "Wasif",
    rating: 5,
    words:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aliquid quibusdam perferendis quam ullam optio impedit fuga, vitae enim reiciendis! Soluta quae rem natus perspiciatis",
  },
  {
    id: 2,
    image: patient_temp,
    name: "Wasif",
    rating: 3,
    words:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aliquid quibusdam perferendis quam ullam optio impedit fuga, vitae enim reiciendis! Soluta quae rem natus perspiciatis",
  },
  {
    id: 3,
    image: patient_temp,
    name: "Wasif",
    rating: 5,
    words:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aliquid quibusdam perferendis quam ullam optio impedit fuga, vitae enim reiciendis! Soluta quae rem natus perspiciatis",
  },
];

const Reviews = () => {
  const [value, setValue] = useState(5);

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
        What our patients says
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
        {best_reviews.map((item) => (
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
            <CardContent sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  alt="image"
                  image={item.image}
                  sx={{
                    objectFit: "contain",
                    height: 57,
                    width: 57,
                    borderRadius: 2,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: 55,
                    ml: 2.5,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 400, pb: 0 }}
                  >
                    {item.name}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    readOnly
                    size="small"
                  />
                </Box>
              </Box>
              <Typography color="text.secondary" sx={{ fontSize: "10", mt: 2 }}>
                "{item.words}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default Reviews;
