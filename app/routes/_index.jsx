import { useEffect, useState } from "react";
import PopularCities from "../Components/PopularCities";
export const meta = () => {
  return [{ title: "Remix - Weather App" }];
};
import { json } from "@remix-run/node";
import { appId } from "../apiInfos/apiInfos";

export const loader = async()=>{
  const ANKARA_RES = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=${appId}`)
  const ANKARA_DATA = await ANKARA_RES.json();

  const ISTANBUL_RES = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${appId}`)
  const ISTANBUL_DATA = await ISTANBUL_RES.json();
  
  const LONDON_RES = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${appId}`)
  const LONDON_DATA = await LONDON_RES.json();
  return json({
      ankara: ANKARA_DATA,
      istanbul: ISTANBUL_DATA,
      london: LONDON_DATA
  })
}

export default function Index() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
      error => {
        return;
      }
    );
  }, []);
  const [searchBarContent,setSearchBarContent] = useState("");
  const handleInputChange = (e)=>{
    setSearchBarContent(e.target.value);
  }
  const handleSearchBtnClick = ()=>{
    window.location.href = `/${searchBarContent}`;
  }
  const handleKeyPress = (e)=>{
    e.key === "Enter" && handleSearchBtnClick();
  }
    if(location){
      window.location.href = `${location.lat}, ${location.long}`
      console.log("osman")
    }
  else{
    return (
      <div id="welcome-page">
        <div className="input-container">
          <input 
          placeholder="Enter Your City Name" 
          type="text"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearchBtnClick}>Search</button>
        </div>
        <PopularCities/>
      </div>
    );
  }
  
}
