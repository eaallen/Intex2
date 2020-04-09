import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col,Jumbotron,Container} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

function HomeBase(props) {
    let user = props.context.user()
    console.log('<><><>',user)
    return (
        <div className="text-light bg-dark">

                        <Jumbotron className='text-center'>
                <h1 className="text-dark">
                    {user?
                    <>
                       Welcome, {user.email}
                    </>
                    :
                    <>
                        Analytics that Save Lives.
                    </>}

                </h1>
                

            </Jumbotron>

            <Row  className='center-row'>
                <Col>
                    <h1>
                        Research Campaigns                        
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
                        Predict
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem 
                        ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                </Col>
                <Col>
                    <h1>
                      SandBox SQL
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
const Home = withFirebase(HomeBase)
export default Home;
