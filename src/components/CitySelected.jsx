import React, { Component } from 'react'
import Weather from './Weather'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

class CitySelected extends Component {
    
    state = {
        searchQuery: '',
        weather: {},
        isLoading: true
    }

    fetchWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchQuery}&appid=1dbe733c557eccc7934c01475ae01960&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                weather: data,
                isLoading: false,
            })
        }
        catch (error) {
            console.log(error)
        }
    }

  render() {

    return (
        <Container>
        <Row>
            <Col md={12}>
                <Row className='mt-5 justify-content-md-center'>
                    <Col md={10}>
                        <Form.Group>
                        <Form.Label  style={{color: "rgb(81, 107, 157)", letterSpacing: "1px", fontWeight: "bold"}}>Here you can search...</Form.Label>
                            <Form.Control className="input"
                                type="text"
                                placeholder="Name of city..."
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>  
                    </Col>
                    <Col md={2} className="mt-4 pt-2">
                        <Button variant="light"
                        onClick={this.fetchWeather}>SEARCH
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col md={12}>
                <Weather weather={this.state.weather}/> 
            </Col>
        </Row>
    </Container>
    )
  }
}
export default CitySelected