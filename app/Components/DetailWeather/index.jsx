import { FaLocationArrow,FaMale } from "react-icons/fa";
const DetailWeather = (props)=>{
    const I = props.info;
    const I_LIST = props.info.list;
    console.log(I)
    return(
        <div id="DetailWeather">
            <div className="general-city-infos">
                <div>
                   <i><FaLocationArrow /></i>
                    <p className="data">{I.coordLat}</p>
                    <p>Latitude</p>
                </div>
                <div>
                    <i><FaLocationArrow /></i>
                    <p className="data">{I.coordLong}</p>
                    <p>Longtitude</p>
                </div>
                <div>
                    <i><FaMale /></i>
                    <p className="data">{I.population}</p>
                    <p>Population</p>
                </div>
            </div>
            <div className="temps-area">
                {I_LIST.map(e=>{
                    const [DATE,CLOCK] = e.dt_txt.split(" ");
                    const TEMP  = e.main.temp-273.15;
                    const [YEAR,MONTH,DAY] = DATE.split("-");
                    const [HOUR,MIN] = CLOCK.split(":")
                    console.log(e.weather[0].icon);
                    return(
                        <div key={e.dt} className="item">
                            <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="" />
                            <p className="temp">{TEMP.toFixed(0)} <sup>0</sup></p>
                            <p className="date">{DAY} {MONTH} {YEAR}</p>
                            <p className="clock">{HOUR}:{MIN}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DetailWeather;