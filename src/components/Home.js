import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar } from 'react-bootstrap';

import Formulario from './Formulario'

function Home(){

    return(
        <div className="App">
        
        <Container fluid className='bg-primary text-center'>
            <Row>
                <h1 className=''> </h1>
            </Row>
        </Container>

        <Container fluid className='bg-dark'>

            <Row style={{height: "200px"}}></Row>

            <Row className='m-5'>
                <Col className='d-block text-center'>
                    <img src='https://placeholderlogo.com/img/placeholder-logo-1.png' alt="logoplaceholder"></img>
                    <h5 className='text-white'>Cole, clique e <b className='text-primary'>encurte.</b></h5>
                </Col>
            </Row>

            <Row className='justify-content-center m-0'>
            <Col sm="6">
                <Formulario />
            </Col>
            </Row>
        </Container>

        <Container fluid id="footerBar" className='text-center fixed-bottom p-3'>
            <Row>
                <Col className='p-0'>
                    <h6 className='text-white-50'>Stacks for devs</h6>
                </Col>
            </Row>

            <Row>
                <Col>
                
                    <p className='text-white-50'>ReactJS  +  NodeJS  +  Bitly API  +  Bootstrap</p>
                    <h6 className='text-white-50'>Made with love by aleufi_</h6>
                
                </Col>
            </Row>
        </Container>

        </div>
    )
    
}

export default Home;