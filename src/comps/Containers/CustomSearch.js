import React from 'react'
import {withFirebase} from './../Firebase'
import axios from 'axios'
import AppContext from '../context/AppContext'
import {waitingfor} from '../helpers/ListingArray'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
function CustomSearchBase(props){ 
    let user = props.context.user() 
    console.log('click')
    const sql1 = "SELECT campaign_id, title,social_share_total, current_amount FROM covid_dataset ORDER BY social_share_total DESC Limit 50"   
    const sql2 = "SELECT campaign_id, title,current_amount, goal FROM covid_dataset ORDER BY current_amount DESC  Limit 50"  
    const sql3 = 'SELECT campaign_id, title,current_amount-goal as ammount_more_than_goal FROM covid_dataset WHERE current_amount > goal ORDER BY current_amount-goal DESC  Limit 50' 
    const sql4 = 'SELECT campaign_id, title, campaign_hearts, current_amount from covid_dataset Order BY campaign_hearts DESC LIMIT 50'
    return(<>
        <Link className="text-dark" to='/search/cust/Social Media Shares'>
            <div onClick={e=>writeQuery(props,sql1)}>
                Social Media Shares        
            </div>
        </Link>
        <Link className="text-dark" to='/search/cust/Most Money Raised'>
            <div onClick={e=>writeQuery(props,sql2)}>
               Most Money Raised         
            </div>
        </Link>

        <Link className="text-dark" to='/search/cust/Surpassed Goal'>
            <div onClick={e=>writeQuery(props,sql3)}>
                Surpassed Goal         
            </div>
        </Link>
        <Link className="text-dark" to='/search/cust/Number of Campaign Hearts'>
            <div onClick={e=>writeQuery(props,sql4)}>
                Number of Campaign Hearts        
            </div>
        </Link>
        {user?
        <>
        <Link className="text-dark" to='/search/cust/Custom SQL'>     
            <div onClick={e=>writeQuery(props,props.context.sql)}>
                View SQL Results        
            </div>                              
        </Link>
        <div className="text-warning link">
            <p onClick={e=>props.context.setModal()}>
                Write SandBox SQL        
            </p>
        </div>

        </>
        :
        <>
        <Link className="text-warning" to='/SignUp'>     
        <div className="">
            <p>
                Sign up to get SandBox SQL access       
            </p>
        </div>
        </Link>
        </>
        }
</>)
    
}
const writeQuery = async(props,sql) =>{
    props.context.loader()
    await props.context.getQueryDataAll(sql)

}
const CustomSearch = withFirebase(CustomSearchBase)
export default CustomSearch