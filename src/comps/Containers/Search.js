import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {withFirebase} from '../Firebase';
import SearchLeft from './SearchLeft';
class SearchBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
            key: null 
        }
    }
    async componentDidMount(){
        // this.props.firebase.getApiToken() returns api key from fireStore
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})
    }

    // calles a single record
    async queryDW (){
        console.log('-------------><><><>',this.key)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const resp = await axios({
            method: 'post',
            url: 'https://api.data.world/v0/sql/eaallen/kandykane',
            data: {
                query: "SELECT *FROM customer where customer_pk ='recD8VpCeX2PwKc34'",
                includeTableSchema: true
            },
            headers:{
                
                Authorization: this.state.key
            }
        });
        console.log(resp.data)
        
        this.setState({...this.state, data: resp.data[1]})
    
    }    
    render(){
        return (
            <div className={this.props.className}>
                
                    <Row>
                        <Col md={3} className="bg-secondary">
                            <SearchLeft key = {this.state.key}/>
                            <Button onClick={e=> this.queryDW()}>Search</Button>
                        </Col>
                        
                        <Col md={9} className="bg-danger">
                           {this.state.data? <>{Object.entries(this.state.data).map(item=>{ console.log(item); return(
                            <Row key={item[0]+'key'}>
                                <Col>{item[0]}</Col><Col>{item[1]}</Col>
                            </Row>
                           )})}</>:<></>}
                           
                           
                        </Col>
                    </Row>    
                  
            </div>
      );
    

    }
}
const Search = withFirebase(SearchBase)
export default Search;
