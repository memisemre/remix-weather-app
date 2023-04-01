export const meta = () => {
  return [{ title: "New Remix App" }];
};

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
const city = "ankara"
export const loader = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=`;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=`);
  const data = await response.json();
  console.log(data)

  return json({
    data: data
  });
};

export default function Index() {
  
  console.log("osman")
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      
    </div>
  );
}
