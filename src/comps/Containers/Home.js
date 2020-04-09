import React from 'react';
import {Row, Col,Container} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

function HomeBase(props) {
    let user = props.context.user()
    return (
        <div className="text-light bg-dark">

            <div className='text-center jumbotron' style={{backgroundColor:'smokewhite',backgroundImage:'url("/bg.jpg")',paddingTop:'15.9rem',paddingBottom:'15.9rem'}}>
                <h1 className="text-light">
                    {user?
                    <>
                       Welcome, {user.email}
                    </>
                    :
                    <>
                        Analytics that Save Lives.
                    </>}

                </h1>
                

            </div>

            <Row  className='center-row'>
                <Col>
                    <h1>
                        Research Campaigns                        
                    </h1>
                    <Container>
                    <p>
                    Get a better understanding of the most and least successful campaigns on record. Use the pre-made search options to 
                    quickly see visual over views and details about outliers. Use the data provided to execute a successful GoFundMe campaign.  
                    </p>
                    </Container>
                </Col>
                <Col>
                    <h1>
                        Predict
                    </h1>
                    <p>
                    Learn how a future GoFundME campaign might fair when published. Our Machine Learning algorithms take the parameters
                     provided and return a predicted amount of donors and the total funds that could be raised.                     
                    </p>
                </Col>
                <Col>
                    <h1>
                      SandBox SQL
                    </h1>
                    <p>
                    Explore the data with an unlimited amount of possibilities. SandBox SQL gives you the freedom of writing SQL with out worrying about UPDATE, DROP, etc.
                    This is possible because SandBox SQL was purposely designed for data viewing only.                     
                    </p>
                </Col>
            </Row>    
   
        </div>
  );
}
const Home = withFirebase(HomeBase)
export default Home;
