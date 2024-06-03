import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'

import { Container, Row, Col } from 'react-bootstrap';

import Formulario from './Formulario'
import Rodape from './Rodape'

function Home(){

    return(
        <div className="App">


        <Container fluid className='bg-dark d-flex flex-column justify-content-center align-content-center' id='mainContainer'>

            <Row className='m-5 mb-0'>
                <Col className='d-flex justify-content-center'>
                    <img className='m-5' src='/TinyPath main-03.png' alt="logoplaceholder" width='280px'></img>
                </Col>
            </Row>

            <Row>
                <Col className='d-flex justify-content-center p-5 pt-0'>
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