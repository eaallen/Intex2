import React from 'react';
import './App.css';
import './index.css'
import {Container, Row,Col} from 'react-bootstrap'
import Top from './comps/Containers/Top'
import Home from './comps/Containers/Home'
import Search from './comps/Containers/Search'
import Analyze from './comps/Containers/Analyze'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withFirebase } from './comps/Firebase';
import SignUp from './comps/Containers/SignUp';
import SignIn from './comps/Containers/SignIn';
import ForgotPassword from './comps/Containers/ForgotPassword';

function AppBase(props) {
  return (
    <div className="App" >
    <Router>

      <Container fluid > 

        <Row>
          <Col xl={12}>
            {/* <Navbar> */}
              <Top></Top>
            {/* </Navbar>  */}
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
               <div>
                
                <Switch>
                <Route path='/SignUp'>
                    <SignUp/>
                  </Route>
                  <Route path='/ResetPassword'>
                    <ForgotPassword/>
                  </Route>
                  <Route path='/SignIn'>
                    <SignIn/>
                  </Route>
                  <Route path="/Search" >
                    <Search />
                  </Route>
                  <Route path="/Analyze">
                    <Analyze />
                  </Route>
                  <Route path="/" key='filter' >
                    <Home className="bg-warning"/>
                  </Route>
                  
                </Switch>
              </div>
            </Col>
                  
          
        </Row>
      </Container> 
    </Router> 
    </div>
  );
}
const App = withFirebase(AppBase)
export default App;
