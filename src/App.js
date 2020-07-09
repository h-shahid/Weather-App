import React, { Fragment, useState, useEffect } from 'react'
import './App.css'  //import css file into app

const App = () => {
  const [weather, setWeather] = useState([]) //useState setting up state for weather. Initial state is an empty array 
  const fetchApi = async () => {  //created promise 
    // let city = 'Mobile, AL'
    const appID = process.env.REACT_APP_WEATHER_API_KEY
    //hides api key from the baddies
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mobile&appid=${appID}&units=imperial`)
    let weather = await res.json() //setting weather to json 
    setWeather(weather)
    console.log(weather)
  }
  useEffect(() => {

    fetchApi(); //return promise 
    return () => { }  // clean up function -gives desired effect
  }, [])  //dependency array 

  return (
    <Fragment>
      <div className="my-list">
      
        <h1 className="text-center">Today's Weather</h1>
    <div className="text-center">
    {weather.name}
      </div>
      {weather.weather && (
        <Fragment>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />

          
        

        </Fragment>
      )}
 {weather.main && (
        <Fragment>

          <div className="list-group">

          <div className= "list-group-item active"> Current Temperature: {weather.main.temp}F </div>
          <div className= "list-group-item">Feels Like: {weather.main.feels_like}F</div>
          <div className= "list-group-item"> Description: {weather.weather[0].description}</div>
          <div className= "list-group-item"> Humidity: {weather.main.humidity}</div>

          </div>

        </Fragment>
      )}
   
          </div>

    </Fragment>

  )
}

export default App
