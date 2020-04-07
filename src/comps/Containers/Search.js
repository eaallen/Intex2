import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {withFirebase} from '../Firebase';
import SearchLeft from './SearchLeft';
import SearchOverView from './SearchOverView'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  
class SearchBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {},
            key: null 
        }
    }
    async componentDidMount(){
        // this.props.firebase.getApiToken() returns api key from fireStore
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})
    }

    // calles a single record
    async queryDW (){
        console.log('we are in')
        this.setState({...this.state, data: this.props.firebase.state.dataQuerySingle})
    
    }    
    render(){
        const data = this.state.data
        return (
            <div className={this.props.className}>
                {console.log('DATA----->',this.state.data)}
                    <Row noGutters>
                        <Col md={3}>
                            <SearchLeft key = {this.state.key} showdata={e=>this.queryDW()}/>
                        </Col>
                        
                        <Col md={9} >
                            
                                <Switch>
                                    <Route path="/search/overview/:title">
                                        <SearchOverView title={"Exceeded Goal"}/>
                                    </Route>
                                    <Route path='/search/detial'>
                                        {this.state.data?
                                            <div>
                                                <br></br>
                                                <a href={this.state.data.url}>
                                                    <img className='detial-img'src={this.state.data.campaign_image_url}/>
                                                </a> 
                                                <h3>{this.state.data.title}</h3>
                                            </div>
                                            :
                                            <></>
                                        }
                                                
                                        {this.state.data? <>{Object.entries(this.state.data).map(item=>{return(
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
