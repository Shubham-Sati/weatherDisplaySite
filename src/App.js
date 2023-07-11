import "./App.css";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./services/weatherService";
import {
  addWeatherDataRequest,
  addWeatherDataSuccess,
  addWeatherDataFailure,
  addWeatherDataClearError,
} from "./redux/reducers/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({ q: "dehradun" });
  const [aqi, setAqi] = useState({ aqi: "yes" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      dispatch(addWeatherDataRequest());

      await getFormattedWeatherData({
        ...query,
        ...aqi,
      })
        .then((data) => {
          dispatch(addWeatherDataSuccess(data));
          setWeather(data);
        })
        .catch((err) => {
          dispatch(addWeatherDataFailure(err));
          dispatch(addWeatherDataClearError());
        });
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
