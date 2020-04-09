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
        summary = "Over goal by $" + num
    }
    else{
        summary = "Under goal by $" + Math.abs(num)
    }

    console.log('NUM>>>>>>>>>>',num)
    console.log('SUMMARY>>>>>>>>>>',summary)

    return(
        <div>
            {/* <p>{info.column_a}</p> */}
            <a href={props.context.dataQuerySingle.url}>
                <img className='detail-img'src={props.context.dataQuerySingle.campaign_image_url}/>
            </a> 
            <h3>{props.context.dataQuerySingle.title}</h3>
            {/* here */}
            <p className="text-success">{summary}</p>
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