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
            <h1 className={props.className}>
                Analyze 
            </h1><br />
            <bs.Container>
                <bs.Row>
                    <bs.Col md={.5}>
                    <>
                        <bs.Button variant="dark" onClick={() => setModalShow(true)}>
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
                        <PredictForm func={'msg'}/>
                    </bs.Col>
                    <bs.Col>

                        <div md='8'>Predicted Amount of Donators:</div>
                        <p id='msg'></p>
                        
                        <div md='8'>Predicted Amount Donations Recieved:</div>
                        <p id="msg2"></p>

           

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
            About the Analyze function
          </bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <p>
            This is all about the Analyze function
          </p>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          <bs.Button variant="dark" onClick={props.onHide}>Close</bs.Button>
        </bs.Modal.Footer>
      </bs.Modal>
    );
  }