import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function Rodape(){
    return(

        <Container fluid id="footerBar" className='text-center fixed-bottom p-3'>
            <Row>
                <Col className='p-0'>
                    <h6 className='text-white-50'>Stacks for devs</h6>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p className='text-white-50'>ReactJS  +  NodeJS  +  Bitly API  +  Bootstrap</p>
                    <h6 className='text-white-50'>Made with &#x2764; by <a href='https://www.linkedin.com/in/alyfher-cambarotto-371083285/' target='_blank' rel="noreferrer">aleufi_</a></h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Rodape;