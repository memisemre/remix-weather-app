import { useState } from "react";
export const meta = () => {
  return [{ title: "Remix - Weather App" }];
};

export default function Index() {
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
