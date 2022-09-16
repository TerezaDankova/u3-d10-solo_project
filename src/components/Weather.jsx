import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import moment from 'moment';

class Weather extends Component {

    
    render() {
        return (
            <>
            <div>
            {this.props.weather.main && 
            <Container>
            <Row className="justify-content-md-center mt-5">
              <div className="main2">
                    <p className="header2 header_text2">{this.props.weather.name}</p>
                    <div className="flex">
                    <p className="day">Day: <strong>{moment().format('dddd')}, </strong> <strong>{moment().format('LL')}</strong></p>
                    </div>
                    <div className="flex">
                          <p className="temp">Apparent Temperature :<strong> {this.props.weather.main.feels_like} °C </strong></p>
                          <p className="temp">Real Temperature :<strong> {this.props.weather.main.temp} °C </strong></p>
                    </div>
                    <div className="flex">
                          <p className="rain_wind">Humidity : <strong> {this.props.weather.main.humidity} % </strong></p>
                          <p className="rain_wind">Pressure : <strong> {this.props.weather.main.pressure} hPa </strong></p>
                    </div>
                    <div className="flex">
                          <p className="rain_wind">Sunrise: <strong>{new Date(this.props.weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')} </strong></p>
                          <p className="rain_wind">Sunset: <strong>{new Date(this.props.weather.sys.sunset * 1000).toLocaleTimeString('en-IN')} </strong></p>
                    </div>
              </div>
             </Row>
             </Container>
                       }
                    
                </div>
            </>
        )
    }
}
export default Weather