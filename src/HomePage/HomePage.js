import HomePageDisplay from "./HomePageDisplay"
import { useEffect, useState } from "react";

function HomePage() {

    const apiKey = "f42cb39b3aae433f8ae152130221405";
    const days = 1;
    const query = "80424"
    const [weatherData, setWeatherData] = useState({});
    //const [loading, setLoading] = '';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}`


    async function isLoaded(e) {
        //e.preventDefault();
        //setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
       // setLoading(false);
        setWeatherData(data);
    }

    useEffect(() => {
        isLoaded();
    },[])


    return (
        <div>
            <h1>Testing HomePage HTML</h1>
            <HomePageDisplay weatherData={weatherData} />
        </div>
    )
}


export default HomePage;