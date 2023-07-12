const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

const formatCurrentWeather = (data) => {
  const { name, country, localtime } = data.location;
  const {
    wind_kph,
    humidity,
    feelslike_c,
    temp_c,
    wind_dir,
    pressure_mb,
    vis_km,
    uv,
  } = data.current;

  const temp_f = (temp_c * (9 / 5) + 32).toFixed(2);
  const { o3, co } = data.current.air_quality;
  const high = parseFloat(temp_c + 10).toFixed(2);
  const low = parseFloat(temp_c - 5).toFixed(2);
  const high_f = (high * (9 / 5) + 32).toFixed(2);
  const low_f = (low * (9 / 5) + 32).toFixed(2);
  const { icon, text } = data.current.condition;

  return {
    name,
    country,
    localtime,
    wind_dir,
    wind_kph,
    pressure_mb,
    humidity,
    vis_km,
    uv,
    feelslike_c,
    temp_c: temp_c + " °C",
    temp_f: temp_f + " F",
    high: high + " °C",
    high_f: high_f + " F",
    low: low + " °C",
    low_f: low_f + " F",
    icon,
    text,
    pm: o3,
    aqi: co,
  };
};

const formatForecastWeather = (data) => {
  const { localtime } = data.location;
  const startHr = parseInt(localtime.split(" ")[1].split(":")[0]) + 1;
  const endHr = startHr + 10 >= 24 ? 24 : startHr + 10;
  const hourly = data.forecast.forecastday;
  const { sunrise, sunset } = hourly[0].astro;

  const hourArray = hourly[0];
  const hours = hourArray.hour.slice(startHr, endHr);
  const hoursDetail = hours.map((day) => {
    return {
      temp: day.feelslike_c,
      hour: day.time.split(" ")[1],
      icon: day.condition.icon,
    };
  });

  const days = data.forecast.forecastday;
  const next9days = days.slice(1, 10);
  const next9forcast = next9days.map((perday, idx) => {
    return {
      hour: perday.astro.sunrise,
      temp: perday.day.maxtemp_c,
      icon: perday.day.condition.icon,
    };
  });
  const forecastObj = {
    sunset: sunset,
    sunrise: sunrise,
    hourly: hoursDetail,
    forecast: next9forcast,
  };

  return forecastObj;
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "current.json",
    searchParams
  ).then(formatCurrentWeather);

  searchParams = { ...searchParams, days: 7 };
  const formattedForecastWeather = await getWeatherData(
    "forecast.json",
    searchParams
  ).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export const iconUrlFromCode = (iconURL) => `http:${iconURL}`;

export default getFormattedWeatherData;
