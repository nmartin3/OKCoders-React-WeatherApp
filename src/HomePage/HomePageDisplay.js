import Card from 'react-bootstrap/Card'

function HomePageDisplay(props) {
    console.log(props);
    if (!props.weatherData.location?.name) {
        return <div></div>
    } else {
        const locationName = props.weatherData.location.name
        const date = props.weatherData.current.last_updated
        const currentTemp = props.weatherData.current.temp_f
        const conditionText = props.weatherData.current.condition.text
        const conditionIcon = props.weatherData.current.condition.icon
        const windSpeed = props.weatherData.current.wind_mph
        const precipInches = props.weatherData.current.precip_in
        const conditionIconURL = `https:${conditionIcon}`

        return (
                       <div>
                        <h1>OKCoders Weather App</h1>
                <Card style={{ width: '25rem', margin: '2em auto' }}>
                            <Card.Body>
                        <Card.Title>Weather for {locationName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Date: {date}</Card.Subtitle>
                                <Card.Text>
                                    <div className="forecast-icon"><img src={conditionIconURL} alt="" width="50" /></div>
                                    <p>Current Temp: {currentTemp}</p>
                                    <p>Condition Text: {conditionText}</p>
                                    <p>Wind Speed: {windSpeed}</p>
                                    <p>Precip Inches: {precipInches}</p>
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>*/}
                            </Card.Body>
                         </Card>
                        </div>
        )
       
    }
}

export default HomePageDisplay;
