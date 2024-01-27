import React from 'react'
//Functional Component

    /* 
    In this new WeatherDisplay component:

It's a functional component that takes weatherData as a prop.
If there is no weatherData, it returns null, preventing the rendering of an empty div.
If weatherData is available, it renders the weather information.

    
    */

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return null; //If no weather data, do not render anything
    }





    return (
        
      <div>
      <h2>Weather for {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            
    </div>
        
    )
}


export default WeatherDisplay;