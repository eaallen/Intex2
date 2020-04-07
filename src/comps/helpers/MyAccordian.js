import React from 'react'
import {Accordion,Card,Spinner,Button} from 'react-bootstrap'
import ListingArray from './ListingArray'
function MyAccordian(props){

    return(
        <Accordion>
            <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={e=>{if(!props.kind){props.queryMethod()}}}>
                {props.title}
                
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>                        
                {props.kind?               
                <ListingArray array={props.kind} showdata={props.showdata}/>                   
                :
                <><Spinner animation="border" variant="primary" /></>}
            </Card.Body>
            </Accordion.Collapse>

            </Card>
        </Accordion>

    )
}
export default MyAccordian