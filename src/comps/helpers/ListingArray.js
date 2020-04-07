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
                    <Link to='/search/detial' key={item[0]}>
                        <div className="text-left"  onClick={e=>waitingfor(item[0], props)} style={{marginRight:'1rem'}}>
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
                    <Link to='/search/detial' key={item[0]}>
                        <div className="text-left"  onClick={e=>waitingfor(item[0], props)} style={{marginRight:'1rem'}}>
                            <strong>{item[1]}</strong> <br/> ${item[2]}                            
                        </div>
                    </Link>
                )})}
            </ul>

        )
    }
}
const waitingfor = async(pk,props)=>{
    console.log('GUUUUUUUUUUUR', props)
    console.log('hello')
    await props.firebase.getQueryData(pk)
    props.showdata()

}
const ListingArray = withFirebase(ListingArrayBase)
export default ListingArray