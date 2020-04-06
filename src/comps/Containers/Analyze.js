import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import PredictForm from '../Formik'
import * as bs from 'react-bootstrap'

import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import { Formik } from 'formik';

function Analyze(props) {
    return (
        <div>
            <div className={props.className}>
                Analyze 
            </div><br />
            <bs.Container>
                <bs.Row>
                    <bs.Col>
                        <PredictForm md='4'/>
                    </bs.Col>
                    <bs.Col>
                        <div md='8'>Results</div>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        </div>
  );
}

export default Analyze;