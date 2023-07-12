import React from "react";
import Card from "@mui/material/Card";
import sky from "../assets/sky.jpeg";
import sky3 from "../assets/sky3.jpeg";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

const CardDetail = ({ name }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "var(--orange)",
    },
  }));

  const { weatherData } = useSelector((state) => state.weatherData);

  return (
    <Card
      sx={{
        width: { xs: 250, sm: 360, lg: 375 },
        height: 300,
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={name === "weather" ? sky : sky3}
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
          color: name === "weather" ? "var(--black)" : "var(--white)",
          p: 0,
        }}
      >
        <Box sx={{ paddingLeft: "20px" }}>
          {/* add icon */}

          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {name === "weather" ? "Weather" : "Air Quality"}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {name === "weather"
              ? "What's the Weather"
              : `Main Polution : PM ${Number(weatherData?.pm).toFixed(2)}`}
          </Typography>
        </Box>

        <Box sx={{ paddingLeft: "20px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: "40px",
            }}
            component="div"
          >
            {name === "weather"
              ? weatherData?.temp_c
              : Math.round(weatherData?.aqi)}
            <Box
              sx={{
                borderRadius: 1,
                p: "2px 4px",

                backgroundColor:
                  name === "weather" ? "var(--white)" : "var(--lightGreen)",
                fontSize: "12px",
                fontWeight: "bold",

                color: "var(--black)",
              }}
            >
              {name === "weather" ? "11*C" : "AQI"}
            </Box>
          </Typography>

          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            {name === "weather" ? weatherData?.text : weatherData?.wind_dir}
          </Typography>
        </Box>

        {name === "weather" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              color: "var(--black)",
            }}
          >
            <Box
              sx={{
                backgroundColor: "var(--darkBlue)",
                color: "var(--white)",
                p: 2,
                borderRadius: 5,
                width: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="div" sx={{ fontSize: "12px" }}>
                Pressure
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "20px" }}>
                {weatherData?.pressure_mb} mb
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "var(--lightGreen)",
                p: 2,
                borderRadius: 5,
                width: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="div" sx={{ fontSize: "12px" }}>
                Visibility
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "20px" }}>
                {weatherData?.vis_km} km
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "var(--white)",
                p: 2,
                borderRadius: 5,
                width: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="div" sx={{ fontSize: "12px" }}>
                Humadity
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "20px" }}>
                {weatherData?.humidity}%
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              padding: "15px",
              margin: "0 20px",
              backgroundColor: "var(--white)",
              borderRadius: "15px",
              height: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "black",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              <Box>Good</Box>
              <Box>Hazardous</Box>
            </Box>

            <BorderLinearProgress
              variant="determinate"
              value={Math.round(weatherData?.feelslike_c)}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CardDetail;
