import React from 'react';
import { useHistory } from "react-router-dom";
import * as bs from 'react-bootstrap'
import {Navbar,Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {withFirebase} from '../Firebase'

function Top(props) {
    let user = props.context.user()
    const hist = useHistory()
    const signOut = () =>{
        props.context.doSignOut()
        hist.push('/SignIn')
    }
    return (
        <bs.Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand >Corona Killer</Navbar.Brand>      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="text-white" to="/home" >Home</Link><span>&nbsp;&nbsp;</span>
                    <Link className="text-white" to="/search/overview/Overall">Research</Link><span>&nbsp;&nbsp;</span>
                    <Link className="text-white" to="/analyze">Predict</Link><span>&nbsp;&nbsp;</span>
                </Nav>
                <bs.Form inline>

                    
                    {user?
                        <bs.Button variant="outline-light" onClick={e=>signOut()}>Sign out</bs.Button>   
                    :
                        <bs.Button variant="outline-light" onClick={e=> hist.push('/SignIn')}>Sign in</bs.Button>
                    }
                    

                </bs.Form>
            </Navbar.Collapse>
      </bs.Navbar>
  );
}

export default withFirebase(Top);
