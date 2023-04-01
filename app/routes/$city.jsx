export const tryFunction = ({params})=>{
    console.log(params)
}
import {appId} from "../apiInfos/apiInfos"

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async({params})=>{
    const [lat,long] = params.city.split("-");
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${appId}`);
    const data = await response.json();

    if(params.city === "404") throw redirect("/404");

    return json({
    data: data
  });
  

}
export default function Index(){
    const {data} = useLoaderData();
    console.log(data);
    return(
        <h1>osman</h1>
    )
}