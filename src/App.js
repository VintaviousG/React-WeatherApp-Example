import React, { useState } from "react";

import "./App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    //OpenWeatherMap API
    const API_Key = "c0455b554a348868f82f817d2f5effdd";

    // This method will be used to fetch data
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}`
            );

            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                console.error("Weather data not found");
                setWeatherData(null);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className="App">
            <div>
                <h1>Weather App</h1>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={fetchWeatherData}>Get Weather</button>

                {/* Pass weatherData as a prop to WeatherDisplay */}
                <WeatherDisplay weatherData={weatherData} />
            </div>
        </div>
    );
};

export default App;
