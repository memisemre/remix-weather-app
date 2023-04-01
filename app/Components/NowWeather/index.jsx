const NowWeather = (props)=>{
    const I = props.info;
    return(
       <div id="NowWeather">
           <div className="temp">
                <h1> {I.temp}<sup>0</sup> </h1>
           </div>
           <div className="city-name-infos">
                <p className="cityName">{I.name}</p>
                <p className="country">{I.country === "TR" && "Türkiye"}</p>
           </div>
           <div className="temp-details">
                <img src={`https://openweathermap.org/img/wn/${I.weatherIcon}@2x.png`} alt="" />
                <p>{I.weatherDesc}</p>
           </div>
       </div>
    )
}
export default NowWeather;