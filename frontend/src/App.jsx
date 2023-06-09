import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <p>
        Powered by
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
}

export default App;
