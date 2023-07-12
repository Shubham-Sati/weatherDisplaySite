import "./App.css";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./services/weatherService";
import {
  addWeatherDataRequest,
  addWeatherDataSuccess,
  addWeatherDataFailure,
  addWeatherDataClearError,
} from "./redux/reducers/weatherSlice";
import { useDispatch } from "react-redux";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({ q: "dehradun" });
  const [aqi, setAqi] = useState({ aqi: "yes" });
  const [weather, setWeather] = useState(null);
  const [fetchingLocation, setFetchingLocation] = useState(false);

  // console.log(weather);

  useEffect(() => {
    if (navigator.geolocation) {
      setFetchingLocation(true);
      var location_timeout = setTimeout(geolocFail, 10000);

      navigator.geolocation.getCurrentPosition(
        function (position) {
          let lat = position.coords.latitude;
          let log = position.coords.longitude;
          // console.log(lat, log);

          setQuery({
            q: [lat, log],
          });
          setFetchingLocation(false);
        },

        function (error) {
          clearTimeout(location_timeout);
          geolocFail(error);
        },
        { maximumAge: 60000, enableHighAccuracy: true }
      );
    } else {
      geolocFail(
        "Error Occured in fetching your location. Please search your desired location."
      );
    }

    function geolocFail(error) {
      console.log(error);
      setFetchingLocation(false);
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setFetchingLocation(true);
      dispatch(addWeatherDataRequest());

      await getFormattedWeatherData({
        ...query,
        ...aqi,
      })
        .then((data) => {
          dispatch(addWeatherDataSuccess(data));
          setWeather(data);
          setFetchingLocation(false);
        })
        .catch((err) => {
          setFetchingLocation(false);
          dispatch(addWeatherDataFailure(err));
          dispatch(addWeatherDataClearError());
        });
    };

    fetchWeather();
  }, [query, aqi, dispatch]);

  return (
    <div className="App">
      {fetchingLocation ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Sidebar setQuery={setQuery} />
      )}
    </div>
  );
}

export default App;
