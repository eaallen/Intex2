import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {withFirebase} from '../Firebase';
import SearchLeft from './SearchLeft';
import SearchOverView from './SearchOverView'
import AppContext from '../context/AppContext'
import QueryTable from '../helpers/QueryTable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import CampDetial from './CampDetail'
import FullQuery from './FullQuery'
  
class SearchBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    async componentDidMount(){
        // this.props.firebase.getApiToken() returns api key from fireStore
        // this.setState({...this.state, key: props.context.key})
    }

    // calles a single record
    render(){
        return (
            <div className={this.props.className}>
                <FullQuery
                    show={this.props.context.showModal}
                    onHide={() => this.props.context.setModal()}
                />
                    <Row noGutters>
                        <Col md={2}>
                            <SearchLeft key = {this.state.key}/>
                        </Col>
                        
                        <Col md={10} >
                            
                                <Switch>
                                    <Route path="/search/overview/:title">
                                        <SearchOverView/>
                                    </Route>
                                    <Route path='/search/detail'>
                                        <CampDetial/>
                                    </Route>
                                    <Route path='/search/cust/:title'> 
                                        { this.props.context.dataQueryAll?
                                         
                                        <QueryTable/>
                                        :
                                        <></>}
                                    </Route>
                                </Switch>
                           
                        </Col>
                    </Row>    
                  
            </div>
      );
    

    }
}
const Search = withFirebase(SearchBase)
export default Search;
