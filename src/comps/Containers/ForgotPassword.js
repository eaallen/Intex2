import React from 'react';
import { Form,Button,Col} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTE from '../../constanst/router'
//import Footer from 'react-bootstrap/';

const INITIAL_STATE = {
    email: '',
    // password1: '',
    error: null,
  };

class ForgotPasswordBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE
    }
    handleChange =(e) => {
        e.preventDefault()
        // let name =e.target.getAttribute('name')
        
        let new_state={[e.target.getAttribute('name')]: e.target.value}
        this.setState(new_state)
        
    }

    submit_form =(e)=>{
        
       this.props.context.doPasswordReset(this.state.email).then(() =>{
        console.log('2')
        this.setState(INITIAL_STATE)
        console.log('3')
        alert('password reset email sent')
        this.props.history.push(ROUTE.SIGN_IN)
    }).catch(e => {
           this.setState({error: e.message})
       })
       e.preventDefault() 
    }
    

    render(){      
       const isInvalid = this.state.password1 !=='' || this.state.email !==''
    //    console.log('HISTORY-->', this.props.history)
      console.log('>>>>>>', this.state)
    return (
        <div>
            
            <Form onSubmit={this.submit_form}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} name='email'/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="danger" type="submit" >
                        Reset My Password
                    </Button>
                    <div>
                        {this.state.error? <div>{this.state.error} </div>: <></>}
                    </div>

                </Form> <br/>
        </div>
  );}
}
const ForgotPassword = withRouter(withFirebase(ForgotPasswordBase))

export default ForgotPassword;
