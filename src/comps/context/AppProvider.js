import React from 'react';
import App from '../../App'
import AppContext from './AppContext'
import produce from 'immer'
import axios from 'axios'
import {withFirebase} from '../Firebase'
import {Spinner} from 'react-bootstrap'
//import immer
class AppProviderBase extends React.Component{
    constructor(props){
        super(props)
        this.actions={
            semiCustom: this.semiCustom,

        }
        this.state = {
            multi_Record: null,
            key: null,
        }
        //.....where pid is the id of the product.....
    }
    semiCustom = async(sql) =>{
        console.log('->->->->->',sql)
        const resp = await axios({data: {query: sql,},headers:{Authorization: this.state.key}});
        this.setState(state=> produce(state, draft=>{
            console.log('()()()()',resp)
            draft.multi_Record = resp.data
        }))
    }
       
    render(){
        if(!this.state.key){
            return(
                <>
                    <Spinner animation="border" variant="danger" />                    
                </>
            ) 
    
        }      

        return(
            <>
                <AppContext.Provider  value={{...this.state, ...this.actions}}>                    
                    <App/>                   
                </AppContext.Provider>
                
            </> 
        )
        
    }
    async componentDidMount(){
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'https://api.data.world/v0/sql/eaallen/cleancovid';
        axios.defaults.method= 'post'
        this.setState({...this.state, key: await this.props.firebase.getApiToken()})

    }
}
const AppProvider = withFirebase(AppProviderBase)
export default AppProvider