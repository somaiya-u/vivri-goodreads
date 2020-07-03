import React from 'react';
import { Row} from 'react-bootstrap';

function Spinner () {
    return (
        <div className="loader-container">
          <Row className="justify-content-center align-items-center fill-height">
            <div className="loader"></div>
          </Row>
        </div>
    );
}

export default Spinner;