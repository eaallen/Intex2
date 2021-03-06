import React from 'react';
import { Form,Button,Jumbotron} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import { withRouter, Link } from 'react-router-dom';
// import {compose} from 'recompose'
import * as ROUTE from '../../constanst/router'
//import Footer from 'react-bootstrap/';

const INITIAL_STATE = {
    email: '',
    password1: '',
    error: null,
  };

class SignInBase extends React.Component {
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
       this.props.context.doSignInWithEmailAndPassword(this.state.email, this.state.password1).then(() =>{
        this.setState(INITIAL_STATE)
        this.props.history.push(ROUTE.HOME)
    }).catch(e => {
           this.setState({error: e.message})
       })
       e.preventDefault() 
    }
    

    render(){      
    return (
        <Jumbotron>
            
            <Form onSubmit={this.submit_form}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} name='email'/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange} name='password1'/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <Form.Text className="text-muted">
                        <Link to='/SignUp'>Sign up</Link>
                    </Form.Text>

                    <div>
                        {this.state.error? <div>{this.state.error} <a href='/ResetPassword'>forgot password?</a></div>: <></>}
                    </div>

                </Form> <br/>
        </Jumbotron>
  );}
}
const SignIn = withRouter(withFirebase(SignInBase))

export default SignIn;
