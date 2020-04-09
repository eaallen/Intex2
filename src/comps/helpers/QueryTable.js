import React from 'react'
import {Table} from 'react-bootstrap'
import {withFirebase} from '../Firebase/'
import {Link} from 'react-router-dom'
import { useRouteMatch} from "react-router-dom";

function QueryTableBase(props){
    console.log('PROPS', props)
    const data = props.context.dataQueryAll[0]
    const _th = Object.keys(data)
    const allData = props.context.dataQueryAll
    let match = useRouteMatch("/search/cust/:title");
    console.log(match)
    let title = match.params.title
    if(props.context.loading){
        return(
            <h2>LOADING...</h2>
        )
    }
    return(<>
        <h3>{title}</h3>
        <div className="scroll-div">
            <Table responsive="sm">
                
                <thead>
                    <tr>
                        {_th.map((item,key)=>{return(
                            <th key={key}>
                                {item}
                            </th>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {allData.map((item,key)=>{
                        return(                        
                            <tr key={key}>
                                
                                {Object.values(item).map((sub_item,key)=>{
                                    // const attribute = Object.values(sub_item)                                
                                    return(
                                        <td key={key} onClick={e=>writeQuery(props,item.campaign_id)}>
                                            <Link className="text-dark" to={`/search/detail`}>{sub_item}</Link>
                                        </td>
                                    )
                                })}
                            </tr>
                            
                        )
                    })}
                
                </tbody>
            </Table>
        </div>
    </>)
}
const writeQuery = async(props,id) =>{
    console.log('ERRRORS!!!!', id)
    const sql = `SELECT * FROM covid_dataset where campaign_id =${id}`
    props.context.loader()
    await props.context.getQueryData(sql)

}
const QueryTable = withFirebase(QueryTableBase)
export default QueryTable