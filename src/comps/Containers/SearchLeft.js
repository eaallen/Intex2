import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
import {withFirebase} from '../Firebase'
import ListingArray from '../helpers/ListingArray'
class SearchLeftBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            best: null,
            worst: null,
            mostDonations: null,
            suspectedFraud: null,
            key: null
        }
    }
    async componentDidMount(){
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'https://api.data.world/v0/sql/eaallen/kandykane';
        axios.defaults.method= 'post'
        // this.props.firebase.getApiToken() returns api key from fireStore
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})
    }
    // calles a single record
    async queryBest (){
        console.log('click')
        const resp = await axios({
            data: {
                query: "SELECT firstname FROM customer LIMIT 5",
            },
            headers:{                
                Authorization: this.state.key
            }
        });
        console.log(resp.data)
        this.setState({...this.state, best: resp.data})

    }    
    async queryWorst (){
        console.log('click')
        const sql = "SELECT city FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, worst: resp.data})

    }    
    async queryMost (){
        console.log('click')
        console.log('click')
        const sql = "SELECT state FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, mostDonations: resp.data})

    }    
    async queryFraud (){
        console.log('click')
        console.log('click')
        const sql = "SELECT lastname FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, suspectedFraud: resp.data})

    }    
    render(){
        return (
            <div className={this.props.className}>
                  <ul>
                    <li onClick={e=>this.queryBest()}>
                        Best
                        {console.log('the best',this.state.best)}
                        {this.state.best?               
                           <ListingArray array={this.state.best}/>                   
                        :
                        <></>}
                    </li>
                    <li onClick={e=>this.queryWorst()}>
                        worst
                        {this.state.worst?                         
                           <ListingArray array={this.state.worst}/>                   
                           :
                        <></>}
                    </li>
                    <li onClick={e=>this.queryMost()}>
                        most
                        {this.state.mostDonations?                         
                           <ListingArray array={this.state.mostDonations}/>                   
                           :
                        <></>}
                    </li>
                    <li onClick={e=>this.queryFraud()}>
                        fraud
                        {this.state.suspectedFraud?                         
                           <ListingArray array={this.state.suspectedFraud}/>                   
                           :
                        <></>}
                    </li>
                  </ul>
            </div>
      );
    

    }
}
const SearchLeft = withFirebase(SearchLeftBase)
export default SearchLeft;
