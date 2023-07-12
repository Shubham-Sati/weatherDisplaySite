import React from "react";
import { useSelector } from "react-redux";
import { Divider, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import EditCalendarTwoToneIcon from "@mui/icons-material/EditCalendarTwoTone";
import ThunderstormTwoToneIcon from "@mui/icons-material/ThunderstormTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

const WeatherPrediction = () => {
  const { weatherData } = useSelector((state) => state.weatherData);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();

  console.log(weatherData);

  return (
    <Box
      style={{
        width: "330px",
        padding: "30px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {weatherData?.name},
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {weatherData?.region}
          </Typography>
        </div>
        <div>
          <Typography
            sx={{
              fontSize: "18px",
              color: "var(--orange)",
              fontWeight: "bold",
            }}
          >
            {weatherData?.temp_c}
          </Typography>
        </div>
      </Box>
      <Divider sx={{ margin: "25px 0" }} />

      <Card
        sx={{
          minWidth: 275,
          mb: "40px",
          borderRadius: "15px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold" }}
            color="var(--black)"
            gutterBottom
          >
            Sunrise & Sunset
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <WbSunnyTwoToneIcon
              sx={{
                color: "var(--orange)",
                fontSize: "20px",
                marginRight: "15px",
              }}
            />
            <Typography gutterBottom sx={{}} color="var(--darkBlue)">
              {weatherData?.sunrise}
            </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DarkModeTwoToneIcon
              sx={{
                color: "var(--lightGreen)",
                fontSize: "20px",
                marginRight: "15px",
              }}
            />
            <Typography sx={{ gap: 10 }} color="var(--darkBlue)">
              {weatherData?.sunset}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275, borderRadius: "15px" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "var(--darkBlue)",
            color: "var(--white)",
          }}
        >
          <LightModeIcon
            sx={{
              color: "var(--orange)",
              fontSize: "40px",
              marginRight: "20px",
            }}
          />

          <Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {weatherData?.uv} UVI
              </Typography>
              <Box
                sx={{
                  backgroundColor: "var(--lightGreen)",
                  padding: "5px 15px",
                  borderRadius: "15px",
                  marginLeft: "10px",
                  color: "var(--black)",
                }}
              >
                Moderate
              </Box>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "14px" }}>
                Moderate risk from uv rays
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", margin: "40px 0" }}
      >
        Weather Prediction
      </Typography>

      <Card
        sx={{
          minWidth: 275,
          borderRadius: "15px",
          backgroundColor: "#F8F8F8",
          marginBottom: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <LightModeTwoToneIcon
              sx={{
                color: "var(--orange)",
                fontSize: "40px",
                marginRight: "20px",
              }}
            />

            <Box>
              <Typography sx={{ fontSize: "14px" }}>
                {`
                  ${monthNames[month]} ${day + 1}
                  `}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {`${weatherData.text}`}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ color: "var(--orange)", fontWeight: "bold" }}>
            {`${weatherData.low} / ${weatherData.low_f}`}
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 275, borderRadius: "15px", backgroundColor: "#F8F8F8" }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ThunderstormTwoToneIcon
              sx={{
                color: "var(--lightBlue)",
                fontSize: "40px",
                marginRight: "20px",
              }}
            />

            <Box>
              <Typography sx={{ fontSize: "14px" }}>{`
                  ${monthNames[month]} ${day + 2}
                  `}</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {`${weatherData.text}`}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ color: "var(--orange)", fontWeight: "bold" }}>
            {`${weatherData.high} / ${weatherData.high_f}`}
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          backgroundColor: "var(--orange)",
          width: "130px",
          padding: "8px 10px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "var(--white)",
          fontWeight: "bold",
          fontSize: "12px",
          marginTop: "15px",
        }}
      >
        <EditCalendarTwoToneIcon />
        Next 5 Days
      </Box>
    </Box>
  );
};

export default WeatherPrediction;
