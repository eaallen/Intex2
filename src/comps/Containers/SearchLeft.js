import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button,Accordion,Card} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
import {withFirebase} from '../Firebase'
import ListingArray from '../helpers/ListingArray'
import MyAccordian from '../helpers/MyAccordian'
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
        axios.defaults.baseURL = 'https://api.data.world/v0/sql/eaallen/covid-19';
        axios.defaults.method= 'post'
        // this.props.firebase.getApiToken() returns api key from fireStore
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})
    }
    // calles a single record
    async queryBest (){
        console.log('click')
        const resp = await axios({
            data: {
                query: "SELECT column_a, title,current_amount FROM covid19_campaigns where current_amount > goal ORDER BY current_amount DESC LIMIT 5",
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
        const sql = "SELECT customer_pk, city FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, worst: resp.data})

    }    
    async queryMost (){
        console.log('click')
        console.log('click')
        const sql = "SELECT customer_pk, state FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, mostDonations: resp.data})

    }    
    async queryFraud (){
        console.log('click')
        console.log('click')
        const sql = "SELECT customer_pk, lastname FROM customer LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, suspectedFraud: resp.data})

    }    
    render(){
        return (
            <div className={this.props.className}>
                <Accordion className='text-left'>
                    <Card>
                    <Card.Header>
                    <Accordion.Toggle  as={Button} variant="link" eventKey="0" onClick={e=>{if(!this.state.best)this.queryBest()}}>
                        Best
                        {console.log('the best',this.state.best)}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                            {this.state.best?               
                           <ListingArray array={this.state.best} showdata={this.props.showdata}/>                   
                        :
                        <>Loading</>}
                    </Card.Body>
                    </Accordion.Collapse>

                    </Card>
                </Accordion>
                <Accordion>
                    <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={e=>{if(!this.state.worst)this.queryWorst()}}>
                        Worst
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                            {this.state.worst?               
                           <ListingArray array={this.state.worst} showdata={this.props.showdata}/>                   
                        :
                        <>Loading</>}
                    </Card.Body>
                    </Accordion.Collapse>

                    </Card>
                </Accordion>
                <Accordion>
                    <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={e=>{if(!this.state.mostDonations)this.queryMost()}}>
                        Most 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                            {this.state.mostDonations?               
                           <ListingArray array={this.state.mostDonations} showdata={this.props.showdata}/>                   
                        :
                        <>Loading</>}
                    </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion className='acordian'>
                    <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={e=>{if(!this.state.suspectedFraud)this.queryFraud()}}>
                        Fraud 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>                        
                            {this.state.suspectedFraud?               
                           <ListingArray array={this.state.suspectedFraud} showdata={this.props.showdata}/>                   
                        :
                        <>Loading</>}
                    </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
      );
    

    }
}
const SearchLeft = withFirebase(SearchLeftBase)
export default SearchLeft;
