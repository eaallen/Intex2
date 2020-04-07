import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
import {withFirebase} from '../Firebase'
class SearchBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
        }
    }
   
    // calles a single record
    async queryDW (){
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const apikey = this.props.firebase.getOneRecord('startup','exMEUpW9TkwEs0Tu5plh')
        
        const key = await apikey.get().then(doc =>{         
                console.log("Document data:", doc.data());
                return doc.data()
               // doc.data() will be undefined in this case
                console.log("No such document!");
            }).catch(function(error) {
                console.log("Error getting document:", error);
            })
            console.log('=========', key)
        //GET:/file_download/{owner}/{id}/{file}
        const resp = await axios({
            method: 'post',
            url: 'https://api.data.world/v0/sql/eaallen/kandykane',
            data: {
                query: "SELECT *FROM customer where customer_pk ='recD8VpCeX2PwKc34'",
                includeTableSchema: true
            },
            headers:{
                
                Authorization: key.api,
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
                            search bar
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
