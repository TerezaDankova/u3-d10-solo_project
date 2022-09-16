import React from 'react'
import { Cloudy } from 'react-bootstrap-icons'
import { Container, Row } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'

const Home = () => {

  return (
   <Container>
    <Row className="justify-content-md-center mt-5">
          <div>
                <h1 className='rotate'>Select City 
                 <ArrowRight/>
                </h1>
          </div>
      <div className="main shadow-lg">
            <p className="header header_text">Cagliari, Italy</p>
            <div className="flex">
                  <p className="day">Friday,<span> Settembre 16, 2022</span></p>
            </div>
            <div className="flex">
                  <p className="temp">Temprature: 28&deg;</p>
                  <p className="temp">
                        <Cloudy className="mr-4"size={40} />       
                  </p>
            </div>
            <div className="flex">
                  <p className="rain_wind"><strong>Rain:</strong> 1.3 MM</p>
                  <p className="rain_wind"><strong>Wind:</strong> 10 MPH</p>
            </div>
      </div>
     </Row>
     </Container>
    
  )
}
export default Home