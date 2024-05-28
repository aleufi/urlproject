import React from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Success(){

    const location = useLocation();
    const result = location.state;

    return(
        <div>
            <Container fluid>

                <Row style={{height: "200px"}}></Row>

                <Row className='m-5'>
                    <Col className='d-flex justify-content-center'>
                        <h5>Sua URL encurtada:</h5>
                    </Col>
                </Row>

                <Row className='m-5'>
                    <Col className='d-flex justify-content-center'><a href={result.data.link}>{result.data.link}</a></Col>
                </Row>

            </Container>
        </div>

    )
}

export default Success;