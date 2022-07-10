import Card from 'react-bootstrap/Card'

function AstronomyPageDisplay(props) {
    console.log(props);
    if (!props.weatherData.location?.name) {
        return <div></div>
    } else {
        const locationName = props.weatherData.location.name
        //sunrise, sunset, moonrise, moonset, moon_phase, and moon_illumination
        const localtime = props.weatherData.location.localtime
        const sunrise = props.weatherData.astronomy.astro.sunrise
        const sunset = props.weatherData.astronomy.astro.sunset
        const moonrise = props.weatherData.astronomy.astro.moonrise
        const moonset = props.weatherData.astronomy.astro.moonset
        const moon_phase = props.weatherData.astronomy.astro.moon_phase
        const moon_illumination = props.weatherData.astronomy.astro.moon_illumination

        return (
            <div>
                <h1>OKCoders Astronomy Data</h1>
                <Card style={{ width: '25rem', margin: '2em auto' }}>
                    <Card.Body>
                        <Card.Title>Astronomy Data for {locationName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Current Time: {localtime}</Card.Subtitle>
                        <Card.Text>
                            <p>Sunrise: {sunrise}</p>
                            <p>Sunset: {sunset}</p>
                            <p>Moonrise: {moonrise}</p>
                            <p>Moonset: {moonset}</p>
                            <p>Moon Phase: {moon_phase}</p>
                            <p>Moon Illumination: {moon_illumination}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )

    }
}

export default AstronomyPageDisplay;
