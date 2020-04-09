import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import * as bs from 'react-bootstrap'
import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Top(props) {
    return (
        <bs.Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand >Corona Killer</Navbar.Brand>      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="text-white" to="/home" >Home</Link><span>&nbsp;&nbsp;</span>
                    <Link className="text-white" to="/search/overview/Overall">Search</Link><span>&nbsp;&nbsp;</span>
                    <Link className="text-white" to="/analyze">Analyze</Link><span>&nbsp;&nbsp;</span>
                </Nav>
                <bs.Form inline>
                    {/* <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    <bs.Button variant="outline-light">Sign in</bs.Button>
                </bs.Form>
            </Navbar.Collapse>
      </bs.Navbar>
  );
}

export default Top;
