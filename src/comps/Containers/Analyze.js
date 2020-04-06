import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import PredictForm from '../Formik'
import * as bs from 'react-bootstrap'

import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import { Formik } from 'formik';

export default function Analyze(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div className={props.className}>
                Analyze 
            </div><br />
            <bs.Container>
                <bs.Row>
                    <bs.Col md={.5}>
                    <>
                        <bs.Button variant="primary" onClick={() => setModalShow(true)}>
                        About Analyze
                        </bs.Button>
  
                        <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </>
                    </bs.Col>
                </bs.Row><br></br>
                <bs.Row>
                    <bs.Col>
                        <PredictForm />
                    </bs.Col>
                    <bs.Col>
                        <div md='8'>Results</div>
                        <p id='msg'></p>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        </div>
  );
}

function MyVerticallyCenteredModal(props) {
    return (
      <bs.Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <bs.Modal.Header closeButton>
          <bs.Modal.Title id="contained-modal-title-vcenter">
            About Analyze
          </bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <p>
            This is all about the Analyze function
          </p>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button onClick={props.onHide}>Close</bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>
    );
  }