import { useLoaderData } from "@remix-run/react";
import Items from "./Items";

const PopularCities = ()=>{
    
    const {ankara,istanbul,london} = useLoaderData();
    
    return(
        <div className="items-container">
            <Items city={ankara} />
            <Items city={istanbul} />
            <Items city={london} />
        </div>
    )
}
export default PopularCities;