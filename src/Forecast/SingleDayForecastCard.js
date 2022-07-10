import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function SingleDayForecastCard(props) {
    console.log(props);

        return (
            <Col xs="4" md="4" lg="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Weather for {props.locationName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Date: {props.date}</Card.Subtitle>
                                <Card.Text>
                                    <p>Average Temp: {props.averageTemp}</p>
                                    <p>High Temp: {props.highTemp}</p>
                                    <p>Low Temp: {props.lowTemp}</p>
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>*/}
                            </Card.Body>
                        </Card>
                    </Col>
        );
    }


export default SingleDayForecastCard;
