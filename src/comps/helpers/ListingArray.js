import React from 'react'

export default function ListingArray(props){

    return(
        <ul>
            {props.array.map(item=>{
                item = Object.values(item)
                return(
                <li key={item+'key'}>
                    {item}                            
                </li>
            )})}
        </ul>

    )
}