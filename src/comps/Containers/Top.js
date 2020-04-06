import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";

import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';

function Top(props) {
    return (
        <div className={props.className} style={{marginBottom:'.75rem'}}>
            top    
        </div>
  );
}

export default Top;
