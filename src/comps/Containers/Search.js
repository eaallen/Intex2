import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import { wait } from '@testing-library/react';
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
        }
    }
   
    // let data = axiosCall()
    async queryDW (){
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        //GET:/file_download/{owner}/{id}/{file}
        const resp = await axios({
            method: 'post',
            url: 'https://api.data.world/v0/sql/eaallen/kandykane',
            data: {
                query: "SELECT *FROM customer where customer_pk ='recD8VpCeX2PwKc34'",
                includeTableSchema: true
            },
            headers:{
                
                Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcm9kLXVzZXItY2xpZW50OmVhYWxsZW4iLCJpc3MiOiJhZ2VudDplYWFsbGVuOjo0YzBlYWQ5YS1kODE5LTQzMWMtYjVmOS0zNGEwZDE5MzRkOGQiLCJpYXQiOjE1Nzc3MTc5OTcsInJvbGUiOlsidXNlcl9hcGlfcmVhZCIsInVzZXJfYXBpX3dyaXRlIl0sImdlbmVyYWwtcHVycG9zZSI6dHJ1ZSwic2FtbCI6e319.XbV9G84LNvqN6RREjPKFlDLQrTtzUu5KVu46xDS7TOtGnMZ94h1PrNaAkQ6zT-79QOM7Ku2GrZdivguQ_o9jsw	'
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

export default Search;
