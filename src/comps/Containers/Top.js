import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import * as bs from 'react-bootstrap'
import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Top(props) {
    return (
        // <div className={props.className} style={{marginBottom:'.75rem'}}>
        //     top
        // </div>
        <bs.Navbar bg="light" expand="lg">
        <i className="fab fa-battle-net" style={{
          fontSize: "5rem"
          }}>
        </i>
        
      <Navbar.Brand path='/Center'>Corona Killer</Navbar.Brand>      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/analyze">Analyze</Nav.Link>
        </Nav>
        <Link to='/Cart'>
          <i className="fas fa-shopping-cart"></i>
        </Link>
        {/* ({count}) */}
        <bs.Form inline>
          <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <bs.Button variant="outline-success">Search</bs.Button>
        </bs.Form>
      </Navbar.Collapse>
      </bs.Navbar>
  );
}

export default Top;
