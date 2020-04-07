import React from 'react'
import {withFirebase} from './../Firebase'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import AppContext from '../context/AppContext'
import {waitingfor} from '../helpers/ListingArray'
function CustomSearchBase(props){  
    console.log('click')
    return(
        <div onClick={e=>writeQuery(props)}>
            Best of category
        </div>
    )
    
}
const writeQuery = async(props) =>{
    const sql = "SELECT column_a, title,current_amount FROM coronavirusonly where current_amount < goal ORDER BY current_amount LIMIT 5"   
    await props.context.getQueryData(sql)

}
const CustomSearch = withFirebase(CustomSearchBase)
export default CustomSearch