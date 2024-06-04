import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';

function Header(){
    return(

        <Row>
            <Col className='d-flex justify-content-center p-0'>
                <a className='mt-5' href='https://tinypathshortener.netlify.app'><img src='/TinyPath short-05.png' alt="logoplaceholder" width='48px'></img></a>
            </Col>
        </Row>

    )   
}

export default Header;