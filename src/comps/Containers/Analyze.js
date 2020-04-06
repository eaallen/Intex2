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
                    <bs.Col md={.5}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac
                                cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor
                                e veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor s
                                it amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labo
                                re et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima venia
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </bs.Col>
                </bs.Row><br></br>
                <bs.Row>
                    <bs.Col>
                        <PredictForm />
                    </bs.Col>
                    <bs.Col>
                        <div>Results</div>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        </div>
  );
}

export default Analyze;