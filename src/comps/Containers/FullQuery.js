import React from 'react'
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'

function FullQuery(props) {
    console.log(props.context.sql)
    return (
      <bs.Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <bs.Modal.Header closeButton>
          <bs.Modal.Title id="contained-modal-title-vcenter">
            SQL
          </bs.Modal.Title>
        </bs.Modal.Header>
        <bs.Modal.Body>
          <textarea rows="7" cols="102" onChange={e=>props.context.getDataFromTextArea(e)} value={props.context.sql}>
        
          </textarea>
        </bs.Modal.Body>
        <bs.Modal.Footer>
          *invalid queries will be discarded 
          <Link to="/search/cust/Custom SQL" className="btn btn-dark" variant="dark" onClick={e=>writeQuery(props,props.context.sql)}>Submit</Link>
        </bs.Modal.Footer>
      </bs.Modal>
    );
  }
  const writeQuery = async(props,sql) =>{
      if(sql.includes("*")){
        props.context.loader()
        props.context.getQueryDataAll(sql)
      }else if(!sql.includes("campaign_id")){
        alert('You need campaign_id to run')
      }else{
        props.context.loader()
        props.context.getQueryDataAll(sql)  
      }    
}
  export default withFirebase(FullQuery)
  