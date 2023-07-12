import React from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherPrediction from "./WeatherPrediction";
import Box from "@mui/material/Box";

const Home = ({ setQuery }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <WeatherDetails setQuery={setQuery} />
      <WeatherPrediction />
    </Box>
  );
};

export default Home;
