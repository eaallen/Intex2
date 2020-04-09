import React from 'react'
import {Row,Col,Spinner} from 'react-bootstrap'
import {withFirebase} from '../Firebase'
import { useRouteMatch} from "react-router-dom";

function CampdetailBase(props){
    const info = props.context.dataQuerySingle
    const infoKey = Object.keys(info)
    const infoVal = Object.values(info)
    console.log(info.category_id, info.goal, info.description, info.has_beneficiary, info.is_charity)
    window.f5(info.category_id, info.goal_usd, info.description, info.has_beneficiary, info.is_charity )
    if(props.context.loading){
        return(
            <h2>LOADING...</h2>
        )
    }

    let num = info.current_amount - info.goal
    let summary
    
    if(num >= 0){
        summary = <p className="text-success">{"Over goal by $" + num}</p>
    }
    else{
        summary = <p className="text-danger">{"Under goal by $" + Math.abs(num)}</p>
    }

    return(
        <div className='jumbotron'>
            {/* <p>{info.campaign_id}</p> */}
            <a href={props.context.dataQuerySingle.url}>
                <img className='detail-img'src={props.context.dataQuerySingle.campaign_image_url}/>
            </a> 
            <h3>{props.context.dataQuerySingle.title}</h3>
            {/* here */}
            {summary}
            <Row>
                <Col className='text-right'>
                    {infoKey[0]}
                </Col>
                <Col className='text-left'>
                    {infoVal[0]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[2]}
                </Col>
                <Col className='text-left'>
                    {infoVal[2]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[5]}
                </Col>
                <Col className='text-left'>
                    ${infoVal[5]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    <i>Predicted current amount</i>
                </Col>
                <Col className='text-left'>
                   <i> $<span id='msg2'><Spinner animation="grow" size="sm" variant='warning'></Spinner></span></i>
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[7]}
                </Col>
                <Col className='text-left'>
                    ${infoVal[7]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[8]}
                </Col>
                <Col className='text-left'>
                    {infoVal[8]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[9]}
                </Col>
                <Col className='text-left'>
                    {infoVal[9]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[12]}
                </Col>
                <Col className='text-left'>
                    {infoVal[12]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[14]}
                </Col>
                <Col className='text-left'>
                    {infoVal[14]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[15]}
                </Col>
                <Col className='text-left'>
                    {infoVal[15]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[16]}
                </Col>
                <Col className='text-left'>
                    {infoVal[16]}
                </Col>
            </Row>
            <Row>
                <Col className='text-right'>
                    {infoKey[17]}
                </Col>
                <Col className='text-left'>
                    {infoVal[17]}
                </Col>
            </Row>
            <br/>
                
            <h6>{infoKey[11]}</h6>
                
            <div className='text-left'>
                {infoVal[11]}
            </div>        
        </div>
    )
}


const CampDetail = withFirebase(CampdetailBase)
export default CampDetail