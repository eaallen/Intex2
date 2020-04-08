import React from 'react'
import {withFirebase} from './../Firebase'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import AppContext from '../context/AppContext'
import {waitingfor} from '../helpers/ListingArray'
import {Link} from 'react-router-dom'
function CustomSearchBase(props){  
    console.log('click')
    return(
        <Link className="text-dark" to='/search/cust'><div onClick={e=>writeQuery(props)}>
            Best of category
        </div></Link>
    )
    
}
const writeQuery = async(props) =>{
    const sql = "SELECT column_a, title,current_amount, social_share_total FROM coronavirusonly where current_amount < goal ORDER BY current_amount"   
    await props.context.getQueryDataAll(sql)

}
const CustomSearch = withFirebase(CustomSearchBase)
export default CustomSearch