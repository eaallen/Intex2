import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
import {withFirebase} from '../Firebase'
class SearchLeftBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Best: null,
            Worst: null,
            MostDonations: null,
            SuspectedFraud: null,
            key: null
        }
    }
    async componentDidMount(){
        // this.props.firebase.getApiToken() returns api key from fireStore
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})
    }
    // calles a single record
    async queryBest (){

    }    
    render(){
        return (
            <div className={this.props.className}>
                  x
            </div>
      );
    

    }
}
const SearchLeft = withFirebase(SearchLeftBase)
export default SearchLeft;
