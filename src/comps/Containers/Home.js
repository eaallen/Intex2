import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col,Jumbotron,Container} from 'react-bootstrap';

function Home(props) {
    return (
        <div class="text-light bg-dark">
                        <Jumbotron className='text-center'>
                <h1 class="text-dark">About Us</h1>
                <p class="text-dark">
                    this site is currently just for testing 
                </p>
            </Jumbotron>

            <Row  className='center-row'>
                <Col>
                    <h1>
                        Our Mission
                    </h1>
                    <Container>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                    </Container>
                </Col>
                <Col>
                    <h1>
                        Our Founders
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                
                
                </Col>
                <Col>
                    <h1>
                      Our Legeacy
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>

                </Col>
            </Row>    
   
        </div>
  );
}

export default Home;
