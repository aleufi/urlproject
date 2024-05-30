import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import Formulario from './Formulario'
import Rodape from './Rodape'

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

        <Rodape></Rodape>

        </div>
    )
    
}

export default Home;