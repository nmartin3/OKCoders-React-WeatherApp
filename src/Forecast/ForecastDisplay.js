import SingleDayForecastCard from './SingleDayForecastCard';
import Row from 'react-bootstrap/Row'

function ForecastDisplay(props) {
    console.log(props);
    if (!props.weatherData.location?.name) {
        return <div></div>
    } else {
        const locationName = props.weatherData.location.name

        const allForecastCards = props.weatherData.forecast.forecastday.map(forecast => {
            const date = forecast.date
            const averageTemp = forecast.day.avgtemp_f
            const highTemp = forecast.day.maxtemp_f
            const lowTemp = forecast.day.mintemp_f

            return (
                <SingleDayForecastCard
                    locationName={locationName}
                    date={date}
                    averageTemp={averageTemp}
                    highTemp={highTemp}
                    lowTemp={lowTemp}
                ></SingleDayForecastCard >                
           )
        })


        return <Row>
            {allForecastCards}
            </Row>
    }
}

export default ForecastDisplay;
