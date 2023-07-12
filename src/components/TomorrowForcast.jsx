import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import leaf from "../assets/leaf.jpeg";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const TomorrowForcast = () => {
  const { weatherData } = useSelector((state) => state.weatherData);

  return (
    <Card
      sx={{
        width: 250,
        height: 300,
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={leaf}
      />
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          color: "var(--black)",
          p: 0,
        }}
      >
        <Box sx={{ paddingLeft: "20px" }}>
          {/* add icon */}
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            Tomorrow
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            {weatherData?.name}
          </Typography>
        </Box>

        <Box sx={{ paddingLeft: "20px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: "40px",
              fontWeight: "bold",
            }}
            component="div"
          >
            {weatherData?.feelslike_c} °C
          </Typography>

          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            {weatherData?.text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TomorrowForcast;
