import React from 'react'
import {withFirebase} from '../Firebase';
import {Link} from 'react-router-dom'

function ListingArrayBase(props){
    // waitingfor('pk', props)
    if(props.custom===4){
        return(
            <ul>
                {props.array.map(item=>{
                    item = Object.values(item)
                    return(
                    <Link className="text-dark" to={`/search/detail`} key={item[0]}>
                        <div className="text-left"  style={{marginRight:'1rem'}} onClick={e=>writeQuery(props, item[0])}>
                            <strong>{item[1]}</strong> <br/> <span style={{color:'red'}}>${item[4]-item[3]} under goal</span>                            
                        </div>
                    </Link>
                )})}
            </ul>
    
        )
    
    }else{
        return(
            <ul>
                {props.array.map(item=>{
                    item = Object.values(item)
                    return(
                        <Link className="text-dark" to={`/search/detail`} key={item[0]+'yeh'}>
                            <div className="text-left" style={{marginRight:'1rem'}} onClick={e=>writeQuery(props,item[0])}>
                                <strong>{item[1]}</strong> <br/>                             
                            </div>
                            <div className="text-success">
                                ${item[2]}
                            </div>
                        </Link>
                )})}
            </ul>

        )
    }
}
const writeQuery = async(props,id) =>{
    const sql = `SELECT * FROM coronavirusonly where column_a =${id}`
    props.context.loader()
    await props.context.getQueryData(sql)
}

const ListingArray = withFirebase(ListingArrayBase)
export default ListingArray
