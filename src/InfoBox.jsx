import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import './infoBox.css';


export 
default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1624364959374-05662db16592?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const  COLD_URL="https://images.unsplash.com/photo-1549562969-349ced0da61a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URl="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    return(
        <div className="InfoBox">
            <h1>Weatehr Info-{info.weather}</h1>
            <div  className='cardContainer'>
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    sx={{ height: 140 }}

                    image={
                        info.humidity>80 
                        ?RAIN_URl 
                        :info.temp>15
                        ?HOT_URL
                        :COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {
                                info.humidity>80 
                                ?<AcUnitIcon/>
                                :info.temp>15
                                ?<BeachAccessIcon/>
                                :<ThunderstormIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                        <p>Temperature={info.temp}</p>
                        <p>Humidity={info.humidity}</p>
                        <p >Min Temp={info.tempMin}</p>
                        <p>Max Temp={info.tempMax}</p>
                        <p>The weather can be describe as {info.weather} feel like{info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}