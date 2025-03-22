import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';


export default function WeatherApp() {
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Vasai",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"sky blue"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>This is Weather App by Alok Pal</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={WeatherInfo}/>
      </div>
    );
  }