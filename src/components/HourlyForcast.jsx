import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import leaf from "../assets/leaf.jpeg";
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import DeviceThermostatTwoToneIcon from "@mui/icons-material/DeviceThermostatTwoTone";
import BeachAccessTwoToneIcon from "@mui/icons-material/BeachAccessTwoTone";
import AirTwoToneIcon from "@mui/icons-material/AirTwoTone";

const HourlyForcast = () => {
  const { weatherData } = useSelector((state) => state.weatherData);
  const [series, setSeries] = useState([]);
  const [xaxis, setXaxis] = useState([]);

  useEffect(() => {
    let hours = weatherData?.hourly?.map((data) => {
      return data.hour;
    });
    let temp = weatherData?.hourly?.map((data) => {
      return data.temp;
    });
    setSeries(temp);
    setXaxis(hours);
  }, [weatherData]);

  return (
    <Box
      sx={{
        width: { md: 500 },
        height: 300,
        // maxWidth: 345,
        // borderRadius: "30px",
        position: "relative",
      }}
    >
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
        <Box
          sx={{
            pt: 5,
            pl: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
            }}
          >
            How's the <span>temperature today?</span>
          </Typography>
          <Box sx={{ fontSize: "14px" }}>
            <DeviceThermostatTwoToneIcon
              sx={{
                color: "var(--white)",
                p: "5px",
                borderRadius: "10px",
                backgroundColor: "var(--orange)",
                "&:hover": {
                  backgroundColor: "var(--white)",
                  color: "var(--lightBlue)",
                },
              }}
            />
            <BeachAccessTwoToneIcon
              sx={{
                color: "var(--lightBlue)",
                p: "5px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "var(--orange)",
                  color: "var(--white)",
                },
              }}
            />
            <AirTwoToneIcon
              sx={{
                color: "var(--lightBlue)",
                p: "5px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "var(--orange)",
                  color: "var(--white)",
                },
              }}
            />
          </Box>
        </Box>

        <Chart
          type="line"
          width="100%"
          height="80%"
          series={[
            {
              name: "temperature",
              data: series,
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false,
              },
            },
            stroke: {
              width: 3,
              curve: "smooth",
              colors: "var(--orange)",
              // lineCap: 'butt'
            },
            xaxis: {
              show: false,
              categories: xaxis,
            },

            yaxis: {
              labels: {
                show: false,
              },
            },
            tooltip: {
              x: {
                show: false,
              },
            },

            grid: {
              show: false,
            },
          }}
        />
      </CardContent>
    </Box>
  );
};

export default HourlyForcast;
