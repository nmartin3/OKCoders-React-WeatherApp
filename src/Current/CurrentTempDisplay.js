function CurrentTempDisplay(props) {
    console.log(props);
    return (
        <div>
            {props.weatherData.location?.name && (
                <div>
                    <h3>City</h3>
                    <p>{props.weatherData.location.name}</p>
                </div>
            )}
            {props.weatherData.current?.temp_f && (
                <div>
                    <h3>Current Temperature</h3>
                    <p>{props.weatherData.current.temp_f}</p>
                </div>
            )}
        </div>
    );
}

export default CurrentTempDisplay;
