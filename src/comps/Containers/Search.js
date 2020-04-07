import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {withFirebase} from '../Firebase';
import SearchLeft from './SearchLeft';
import SearchOverView from './SearchOverView'
import AppContext from '../context/AppContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  
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
                {console.log('DATA----->',  this.props.context.dataQuerySingle)}
                    <Row noGutters>
                        <Col md={3}>
                            <SearchLeft key = {this.state.key}/>
                        </Col>
                        
                        <Col md={9} >
                            
                                <Switch>
                                    <Route path="/search/overview/:title">
                                        <SearchOverView/>
                                    </Route>
                                    <Route path='/search/detial'>
                                        { this.props.context.dataQuerySingle?
                                            <div>
                                                <br></br>
                                                <a href={  this.props.context.dataQuerySingle.url}>
                                                    <img className='detial-img'src={  this.props.context.dataQuerySingle.campaign_image_url}/>
                                                </a> 
                                                <h3>{  this.props.context.dataQuerySingle.title}</h3>
                                            </div>
                                            :
                                            <></>
                                        }
                                                
                                        {  this.props.context.dataQuerySingle? <>{Object.entries(  this.props.context.dataQuerySingle).map(item=>{return(
                                            <Row key={item[0]+'key'}>
                                                <Col>{item[0]}</Col><Col>{item[1]}</Col>
                                            </Row>
                                        )})}</>:<></>}
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
