import React from 'react';
import './App.css';
import {Button, Row,Col} from 'react-bootstrap'
import Checkout from './comps/Formik'
import Top from './comps/Containers/Top'
import Home from './comps/Containers/Home'
import Search from './comps/Containers/Search'
import Analyze from './comps/Containers/Analyze'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
    <Router>
      
        <Row>
          <Col xl={12}>
            {/* <Navbar> */}
              <Top className="bg-primary"></Top>
            {/* </Navbar>  */}
          </Col>
        </Row>
        <Row noGutters>
          <Col xl={12}>
               <div>
                
                <Switch>
                  
                  
                  <Route path="/Search" >
                    <Search className="bg-warning"/>
                  </Route>
                  <Route path="/Analyze">
                    <Analyze className="bg-primary" />
                  </Route>
                  <Route path="/" key='filter' >
                    <Home className="bg-warning"/>
                  </Route>
                  
                </Switch>
              </div>
            </Col>
                  
          
        </Row>
      
    </Router> 
    </div>
  );
}

export default App;
