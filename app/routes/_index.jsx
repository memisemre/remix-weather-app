import { useEffect, useState } from "react";
export const meta = () => {
  return [{ title: "Remix - Weather App" }];
};

export default function Index() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
      error => console.error(error)
    );
  }, []);
  console.log(location)
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
      </div>
    );
  }
  
}
