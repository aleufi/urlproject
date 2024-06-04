import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Rodape from './Rodape';
import Header from './Header'

function Error(){
    return (
        
        <Container fluid className='bg-dark'>

            <Header></Header>

            <div id='mainContainer2'>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <img src='/error-06.png' width='150px' alt='errorImg'></img>
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex flex-column justify-content-center mt-5'>
                        <h6 className='text-white text-center'>O link informado está errado ou é inválido</h6>
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex flex-column justify-content-center mt-4'>
                        <Button className='d-flex justify-content-center' href='https://tinypathshortener.netlify.app' variant="secondary">                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg> Tente novamente
                        </Button>
                    </Col>
                </Row>
            </div>

     
            <Rodape></Rodape>

        </Container>

    )
}

export default Error;