import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col,Jumbotron,Container} from 'react-bootstrap';

function Search(props) {
    //GET:/file_download/{owner}/{id}/{file}



    return (
        <div className={props.className}>
            
                <Row>
                    <Col md={4} className="bg-secondary">
                        search bar
                    </Col>
                    
                    <Col md={8} className="bg-danger">
                        Gofundme detials here 
                    </Col>
                </Row>    
              
        </div>
  );
}

export default Search;
