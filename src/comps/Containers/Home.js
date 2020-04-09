import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col,Jumbotron,Container} from 'react-bootstrap';

function Home(props) {
    return (
        <div className="text-light bg-dark">
            {/* <img src='src\images\mount.jpeg'></img> */}
            <img src=''></img>
            <Jumbotron class="jumbotron" className='text-center jumbotron'>
                <h1 className="text-dark">About Us</h1>
                <p className="text-dark">
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
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                    </Container>
                </Col>
                <Col>
                    <h1>
                        Our Founders
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                </Col>
                <Col>
                    <h1>
                      Our Legeacy
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                </Col>
            </Row>    
   
        </div>
  );
}

export default Home;
