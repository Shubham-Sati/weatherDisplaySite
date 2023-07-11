import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: {},
  weatherDataLoading: false,
  weatherDataError: null,
};

const weatherSlice = createSlice({
  name: "weatherData",
  initialState,

  reducers: {
    addWeatherDataRequest: (state, action) => {
      state.weatherDataLoading = true;
      state.weatherData = {};
      state.weatherDataError = null;
    },

    addWeatherDataSuccess: (state, action) => {
      state.weatherDataLoading = false;
      state.weatherData = action.payload;
      state.weatherDataError = null;
    },

    addWeatherDataFailure: (state, action) => {
      state.weatherDataLoading = false;
      state.weatherData = {};
      state.weatherDataError = action.payload.message;
    },

    addWeatherDataClearError: (state, action) => {
      state.weatherDataError = null;
    },
  },
});

export const {
  addWeatherDataRequest,
  addWeatherDataSuccess,
  addWeatherDataFailure,
  addWeatherDataClearError,
} = weatherSlice.actions;

export default weatherSlice.reducer;
