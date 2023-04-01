
import NowWeather from "../Components/NowWeather";
import DetailWeather from "../Components/DetailWeather"
import { appId } from "../apiInfos/apiInfos"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async({params})=>{
    const [lat,long] = params.city.split("-");
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${appId}`);
    const data = await response.json();
    data.city.name = data.city.name.replace(" Province","");
    if(params.city === "404") throw redirect("/404");
     //Kelvin to Celsius
    const TEMP = data.list[0].main.temp-273.15
    const MIN_TEMP= data.list[0].main.temp_min-273.15;
    const MAX_TEMP = data.list[0].main.temp_max-273.15
    return json({
        data: data,
    city: data.city,
    temps: data.list,
    generalCityInfos:{
        name: data.city.name,
        country: data.city.country,
        temp: TEMP.toFixed(0),
        minTemp: MIN_TEMP.toFixed(0),
        maxTemp: MAX_TEMP.toFixed(0),
        weatherIcon: data.list[0].weather[0].icon,
        weatherDesc: data.list[0].weather[0].description
    },
  });
}
export default function Index(){
    const { data,generalCityInfos} = useLoaderData();
    console.log(data)
    return(
        <div id="pageContainer">
            <NowWeather info = {generalCityInfos}/>
            <DetailWeather />
        </div>
    )
}