import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import CurrentTempDisplay from "./CurrentTempDisplay";
import { useState } from "react";

function CurrentTemp() {
    const apiKey = "f42cb39b3aae433f8ae152130221405";
    const [days, setDays] = useState(5);
    const [query, setQuery] = useState("73106");
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}&aqi=no&alerts=no`;

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setWeatherData(data);
    }
    return (
        <>
            <h1>Current Temps</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Location Query: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter location to lookup weather for"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Days to forecast: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Number of days to forecast"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search!
                </Button>
            </Form>
            {loading && <Spinner animation="border" variant="primary" />}
            <CurrentTempDisplay weatherData={weatherData} />
        </>
    );
}

export default CurrentTemp;
