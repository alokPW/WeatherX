import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Search.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,seterror]=useState(false);

    
    let API_URl="https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY='636292e5db71bb21d5970317eb722208';

    let getWeatherInfo=async()=>{
        try{
            let Respnose= await fetch(`${API_URl}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRespnose=await Respnose.json();
     
            console.log(jsonRespnose);
     
            let result={
             city:city,
             temp:jsonRespnose.main.temp,
             tempMin:jsonRespnose.main.temp_min,
             tempMax:jsonRespnose.main.temp_max,
             humidity:jsonRespnose.main.humidity,
             feelsLike:jsonRespnose.main.feelsLike,
             weather:jsonRespnose.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;

        }
     
    }
   
    let handleChange=(e)=>{
        setCity(e.target.value)
    }

    let  handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
           let newInfo= await getWeatherInfo();
           updateInfo(newInfo);
        }
        catch(err){
            seterror(true);
        }
       
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <h2>Search for Weather</h2>
            <TextField id="City" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} type="submit">Search</Button>
            {error &&<p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    );
}