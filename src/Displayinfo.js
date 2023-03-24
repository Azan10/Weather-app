import Weathericons from "./Weathericons"
  
  import styles from './DisplayInfo.css'

  
 

 function Displayinfo(props){
    const{weatherData}=props
    console.log(weatherData)


    return ( 
        <>
          {weatherData ? (
            <div className="main">
              
              {/* <div style= "backgroundRepeat:no-repeat; backgroundSize:contain; height:200; width:200;">
                <img src="logo.png" className="App-logo" alt="logo" />
              </div> */}
              {/* <Background backgrounds="change" className="background" /> */}
              {/* <img className="background" src="backgrounds/Sunset.png"/> */}
              <div className="content">
                {/* <div className="search">
                  <img className="searchicon" src="infoicons/search.png" alt="search icon"/>
                  <p>search bar</p>
                </div> */}
                <div className="maininfo">
                  <p className="location">{weatherData.locationName}</p>
                  <p className="datetime">{weatherData.currentTime}</p>
                  {/* <p>Time: {weatherData.Time}</p>
                  <p>Date: {weatherData.Date}</p> */}
                  <div className="sun">
                    <p>Sunrise: {weatherData.Sunrise}</p>
                    <p>Sunset: {weatherData.Sunset}</p>
                    
                  </div>
                  <p className="temp">{Math.round(weatherData.Temperature)} &deg;C</p>
                  <p className="description">{weatherData.weatherDescription} </p> 
                  <div className="descriptionicon">
                    <Weathericons icons={weatherData.icon}/>
                  </div>
                </div>
                <div className="allInfo">
                  <h2 className="Today">Today</h2>
                  <div className="box1">
                          
                          <img className="infoicon" src="infoicons/rainfall.png" height="70" width="70"  alt="search icon"/>
                          <span className="values">Rainfall: {weatherData.Rainfall}mm</span>
                      
                        
                   
                          <img className="infoicon" src="infoicons/humidity.png" height="70" width="70" alt="search icon"/>
                          <span className="values">Humidity: {weatherData.Humidity} %</span>
                     
                         
                       
                          <img className="infoicon" src="infoicons/pressure.png" alt="search icon" height="70" width="70"/>
                          <span className="values">Pressure: {weatherData.Pressure} hPa</span>
                          
                         
                  </div>
                  <h2 className="Skiers">Skiers</h2>
                  <div className="skiersinfo">
                    
                    
                      <img className="infoicon2" src="infoicons/snow.png" alt="search icon" height="70" width="70"/>
                      <span className="values2">Snow: {weatherData.Snow}mm</span>
                    
                    
                      <img className="infoicon2" src="infoicons/visibility.png" alt="search icon" height="70" width="70"/>
                      <span className="values2">Visibility: {weatherData.Visibility}</span>
                    
                    
                      <img className="infoicon2" src="infoicons/windspeed.png" alt="search icon" height="70" width="70"/>
                      <span className="values2">Wind Speed: {weatherData.WindSpeed}m/s</span>
                    
                  </div>
                </div>
              </div>
            </div>
          ) : (
            console.log('some data loading')
          )}
        </>
      );

          }
        
    export default Displayinfo;