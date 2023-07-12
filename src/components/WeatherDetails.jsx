import React, { useState } from "react";
import Box from "@mui/material/Box";
import AvatarImg from "../assets/avatar.jpeg";
import Avatar from "@mui/material/Avatar";
import { IconButton, TextField, Typography } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import CardDetail from "./CardDetail";
import HourlyForcast from "./HourlyForcast";
import TomorrowForcast from "./TomorrowForcast";

const WeatherDetails = ({ setQuery }) => {
  const [input, setInput] = useState();
  // const { weatherData } = useSelector((state) => state.weatherData);

  const handleClick = () => {
    if (input === "") return;

    setQuery(input);
  };

  // const handleAddToFavrouite = () => {

  // };

  return (
    <div
      style={{
        flexGrow: 1,
        paddingRight: "40px",
        paddingTop: "20px",
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
          {/* Add to Favroite Icon*/}
          {/* <Tooltip title={"Add to Favrouite"} placement="bottom">
            <FavoriteRoundedIcon
              sx={{
                fontSize: "30px",
                color: "var(--lightRed)",
                transition: "transform 330ms ease-in-out",
                "&:hover": {
                  color: "var(--lightBlue)",
                  transform: "scale(1.5)",
                },
              }}
              onClick={handleAddToFavrouite}
            />
          </Tooltip> */}

          {/* search */}
          <TextField
            type="text"
            label="Search anything..."
            size="small"
            onChange={(e) => setInput({ q: e.target.value })}
            InputProps={{
              style: {
                borderRadius: "12px",
                backgroundColor: "var(--lightWhite)",
              },
              endAdornment: (
                <IconButton onClick={handleClick}>
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
