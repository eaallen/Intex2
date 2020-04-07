import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useRouteMatch} from "react-router-dom";
function SearchOverView(props){
    let match = useRouteMatch("/search/overview/:title");
    console.log(match)
    let title = match.params.title
    return(
    <div>
        <h1>{title}</h1>
        <Container>
            <Row>
                <Col xs={3} className='text-right'>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                </Col>
                <Col xs={9}>
                    iframe tablue here
                </Col>
            </Row>
        </Container>
    </div>    
    )
}
export default SearchOverView