import React from 'react'
import {Accordion,Card,Spinner,Button,Table} from 'react-bootstrap'
import {withFirebase} from '../Firebase/'
import {Link} from 'react-router-dom'
function QueryTableBase(props){
    console.log('PROPS', props)
    const data = props.context.dataQueryAll[0]
    const _th = Object.keys(data)
    const allData = props.context.dataQueryAll
    return(
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
                                    console.log(item)
                                    // const attribute = Object.values(sub_item)                                
                                    return(
                                        <td>
                                            {sub_item}
                                        </td>
                                    )
                                })}
                            </tr>
                        
                    )
                })}
               
            </tbody>
        </Table>
    )
}
const QueryTable = withFirebase(QueryTableBase)
export default QueryTable