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

                 
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Weather for {locationName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Date: {props.date}</Card.Subtitle>
                                <Card.Text>
                                <div className="forecast-icon"><img src={conditionIconURL} alt="" width="50" /></div>
                                    <ul>
                                        <li>Current Temp: {currentTemp}</li>
                                        <li>Condition Text: {conditionText}</li>
                                        <li>Wind Speed: {windSpeed}</li>
                                        <li>Precip Inches: {precipInches}</li>
                                    </ul>
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>*/}
                            </Card.Body>
                        </Card>
        )

       // return {homePageCard}
       
    }
}

export default HomePageDisplay;
