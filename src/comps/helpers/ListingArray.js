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
                    <Link className="text-dark" to='/search/detail' key={item[0]}>
                        <div className="text-left"  onClick={e=>waitingfor(item[0], props.context)} style={{marginRight:'1rem'}}>
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
                        <Link className="text-dark" to={`/search/detail`} key={item[0]}>
                            <div className="text-left"  onClick={e=>waitingfor(item[0], props.context)} style={{marginRight:'1rem'}}>
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
//"SELECT * FROM coronavirusonly where column_a ="+`\'${pk}\'`
export const waitingfor = async(pk,context)=>{
    const sql = "SELECT * FROM coronavirusonly where column_a ="+`\'${pk}\'`
    console.log('GUUUUUUUUUUUR')
    console.log('hello')
    await context.getQueryData(sql)

}
const ListingArray = withFirebase(ListingArrayBase)
export default ListingArray