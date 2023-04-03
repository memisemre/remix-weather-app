const Items= (props)=>{
    const TEMP = props.city.main.temp-273.15;;
    const NAME = props.city.name;
    const ICON = props.city.weather[0].icon;
    const DESC = props.city.weather[0].description;

    const handleClick = ()=>{
        window.location.href = `${NAME}`;
    }
    
    return(
        <div className="homePage-item-container" onClick={handleClick}>
            <h3>{NAME}</h3>
            <img src={`https://openweathermap.org/img/wn/${ICON}@2x.png`} alt="" />
            <p>{TEMP.toFixed(0)}<sup>0</sup></p>
            <p className="desc">{DESC}</p>
        </div>
    )
}


export default Items;