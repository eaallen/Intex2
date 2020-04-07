import React from 'react'
import {withFirebase} from '../Firebase';

function ListingArrayBase(props){
    // waitingfor('pk', props)
    return(
        <ul>
            {props.array.map(item=>{
                item = Object.values(item)
                return(
                <div className="text-left" key={item[0]} onClick={e=>waitingfor(item[0], props)} style={{marginRight:'1rem'}}>
                    <strong>{item[1]}</strong> <br/> ${item[2]}                            
                </div>
            )})}
        </ul>

    )
}
const waitingfor = async(pk,props)=>{
    console.log('GUUUUUUUUUUUR', props)
    console.log('hello')
    await props.firebase.getQueryData(pk)
    props.showdata()

}
const ListingArray = withFirebase(ListingArrayBase)
export default ListingArray