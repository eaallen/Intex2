import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button,Accordion,Card} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
import {withFirebase} from '../Firebase'
import ListingArray from '../helpers/ListingArray'
import MyAccordian from '../helpers/MyAccordian'
import {Link} from 'react-router-dom'
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
        const sql = "SELECT column_a, title,current_amount FROM covid19_campaigns where current_amount < goal ORDER BY current_amount LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, worst: resp.data})

    }    
    async queryMost (){
        console.log('click')
        console.log('click')
        const sql = "SELECT DISTINCT column_a, title,current_amount FROM covid19_campaigns where current_amount > goal ORDER BY days_active LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, mostDonations: resp.data})

    }    
    async queryFraud (){
        console.log('click')
        console.log('click')
        const sql = "SELECT  column_a, title, days_active, current_amount, goal FROM covid19_campaigns where deactivated = 'true' AND current_amount < goal ORDER By goal - current_amount desc LIMIT 5"
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        console.log(resp.data)
        this.setState({...this.state, suspectedFraud: resp.data})
    }  
    async bestSummary(){

    }  
    render(){
        return (
            <div className={this.props.className}>
                <Accordion className='text-left'>
                    <Card>
                    <Link to={'/search/overview/Exceeded Goal'}>
                        <Card.Header>
                        <Accordion.Toggle  as={Button} variant="link" eventKey="0" onClick={e=>{if(!this.state.best)this.queryBest()}}>
                            Best
                            {console.log('the best',this.state.best)}
                        </Accordion.Toggle>
                        </Card.Header>
                    </Link>
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
                    <Link to={'/search/overview/In Need of Help'}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={e=>{if(!this.state.worst)this.queryWorst()}}>
                        In Need of Help
                    </Accordion.Toggle>
                    </Card.Header>
                    </Link>
                    <Accordion.Collapse eventKey="1">
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
                    <Link to={'/search/overview/Fastest to Success'}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={e=>{if(!this.state.mostDonations)this.queryMost()}}>
                        Fastest to Success 
                    </Accordion.Toggle>
                    </Card.Header>
                    </Link>
                    <Accordion.Collapse eventKey="2">
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
                    <Link to={'/search/overview/Failed Attempts'}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={e=>{if(!this.state.suspectedFraud)this.queryFraud()}}>
                        Failed Attempts 
                    </Accordion.Toggle>
                    </Card.Header>
                    </Link>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>                        
                            {this.state.suspectedFraud?               
                           <ListingArray array={this.state.suspectedFraud} showdata={this.props.showdata} custom={4}/>                   
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
