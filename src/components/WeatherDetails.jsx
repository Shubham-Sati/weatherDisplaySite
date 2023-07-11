import React from "react";
import Box from "@mui/material/Box";
import AvatarImg from "../assets/avatar.jpeg";
import Avatar from "@mui/material/Avatar";
import { IconButton, TextField, Typography } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import CardDetail from "./CardDetail";
import HourlyForcast from "./HourlyForcast";
import TomorrowForcast from "./TomorrowForcast";

const WeatherDetails = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        paddingRight: "40px",
        // backgroundColor: "cyan"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "space-between",
          },
          alignItems: "center",
        }}
      >
        {/* header */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Avatar src={AvatarImg} alt="notFound" />
          <Box>
            <Typography sx={{ fontSize: "18px" }}>Hello,</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Jack Grealish
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* search */}
          <TextField
            type="text"
            label="Search anything..."
            size="small"
            // sx={{
            //   "& .MuiInputBase-root": {
            //     borderRadius: 40, // Adjust the value to set the desired border radius
            //   },
            // }}
            InputProps={{
              style: {
                borderRadius: "12px",
                backgroundColor: "var(--lightWhite)",
              },
              endAdornment: (
                <IconButton>
                  <SearchTwoToneIcon
                    sx={{
                      color: "var(--orange)",
                    }}
                  />
                </IconButton>
              ),
            }}
          />
          <CircleNotificationsOutlinedIcon
            sx={{
              stroke: "#ffffff",
              strokeWidth: 1,
              fontSize: "45px",
              fontWeight: 10,
              color: "var(--lightGray)",
            }}
          />
        </Box>
      </Box>

      {/* cards */}
      <Box
        sx={{
          pt: 4,
          display: "flex",
          // backgroundColor: "red",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          justifyContent: {
            xs: "center",
            sm: "space-between",
          },

          alignItem: {
            xs: "center",
          },
        }}
      >
        {/* cards  */}
        <CardDetail name={"weather"} />
        <CardDetail name={"air"} />
      </Box>

      {/* Hourly Forcast */}
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },

          justifyContent: {
            xs: "center",
            sm: "space-between",
          },

          alignItem: {
            xs: "center",
          },
        }}
      >
        <HourlyForcast />
        <TomorrowForcast />
      </Box>
    </div>
  );
};

export default WeatherDetails;
