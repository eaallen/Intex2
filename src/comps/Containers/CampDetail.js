import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {withFirebase} from '../Firebase'
import { useRouteMatch} from "react-router-dom";

function CampdetailBase(props){
    const info = props.context.dataQuerySingle
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
        <div>
            {/* <p>{info.campaign_id}</p> */}
            <a href={props.context.dataQuerySingle.url}>
                <img className='detail-img'src={props.context.dataQuerySingle.campaign_image_url}/>
            </a> 
            <h3>{props.context.dataQuerySingle.title}</h3>
            {/* here */}
            {summary}
            {props.context.dataQuerySingle? 
            <>{Object.entries(props.context.dataQuerySingle).map(item=>{return(
                    <Row key={item[0]+'key'}>
                        <Col >{item[0]}</Col><Col >{item[1]}</Col>
                    </Row>
                )})}</>
            :<></>}       
        </div>
    )
}
// const makeQuery = async(sql,context)=>{
//         await context.getQueryDataAll(sql)
// }


const CampDetail = withFirebase(CampdetailBase)
export default CampDetail