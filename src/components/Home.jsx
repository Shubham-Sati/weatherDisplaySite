import React from "react";
import { Card } from "@mui/material";
import WeatherDetails from "./WeatherDetails";
import WeatherPrediction from "./WeatherPrediction";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box
      style={{
        // backgroundColor: "red",
        // display: { xs: "none", sm: "flex" },
        display: "flex",
        // flexDirection: {
        //   xs: "column",
        //   sm: "row",
        // },
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
        }}
      > */}
        <WeatherDetails />
        <WeatherPrediction />
      {/* </Box> */}
    </Box>
  );
};

export default Home;
