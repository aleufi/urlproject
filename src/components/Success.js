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
                        <h4 className='p-5'>Sua URL encurtada:</h4>
                    </Col>
                </Row>

                <Row className='m-5'>
                    <Col className='d-flex justify-content-center'><a href={result.data.link} className='link-primary p-3 border rounded-3'>{result.data.link}</a></Col>
                </Row>

            </Container>
        </div>

    )
}

export default Success;