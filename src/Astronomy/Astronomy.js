import AstronomyPageDisplay from "./AstronomyDisplay"
import { useEffect, useState } from "react";

function AstronomyPage() {

    const apiKey = "f42cb39b3aae433f8ae152130221405";
    const day = '2022-07-11';
    const query = "73162"
    const [weatherData, setWeatherData] = useState({});
    //const [loading, setLoading] = '';
    const url = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${query}&dt=${day}`


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
    }, [])


    return (
        <div>
            <AstronomyPageDisplay weatherData={weatherData} />
        </div>
    )
}


export default AstronomyPage;