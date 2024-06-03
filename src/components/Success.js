import React from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

import Rodape from './Rodape';

function Success(){

    const location = useLocation();
    const result = location.state;

    const tooltip = (
        <Tooltip id="tooltip">
            Copiar link
        </Tooltip>
    );

    return(
        <div>

            <Container fluid className='bg-dark'>

                <Row className='mt-2 mb-0'>
                    <Col className='d-flex justify-content-center'>
                        <a className='mt-5' href='https://tinypathshortener.netlify.app'><img src='/TinyPath short-05.png' alt="logoplaceholder" width='48px'></img></a>
                    </Col>
                </Row>

                <Row style={{height: "125px"}}></Row>

                <Row className='m-5'>
                    <Col className='d-flex justify-content-center'>
                        <h4 className='p-2 text-white text-center'>Sua URL encurtada:</h4>
                    </Col>
                </Row>

                <Row className='d-flex justify-content-center m-5'>
                    <Col className='col-12 col-md-6 d-flex justify-content-center'>
                        <a href={result.data.link} className='fs-3 link-primary p-2'>{result.data.link.replace(/(^\w+:|^)\/\//, '')}</a>
                    </Col>

                    <div className='w-100'></div>

                    <Col className='col-12 col-md-6 d-flex justify-content-center p-3'>
                        
                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                            <button type="button" onClick={() => {navigator.clipboard.writeText(result.data.link)}} class="btn btn-primary d-flex justify-content-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy m-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"></path>
                                </svg>
                            </button>
                        </OverlayTrigger>

                        <button type="button" class="btn btn-outline-primary ms-2" onClick={() => {window.open(result.data.link, '_blank', 'noopener,noreferrer');}}>Acessar 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right ms-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </button>

                    </Col>

                </Row>

            </Container>

            <Rodape></Rodape>

        </div>

    )
}

export default Success;