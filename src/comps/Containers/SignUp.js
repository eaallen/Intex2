import React from 'react';
import {withFirebase} from '../Firebase'
import {Form,Button,Jumbotron} from 'react-bootstrap'
import {HashRouter  as Router,Switch,Route,Link} from "react-router-dom";

// import { Link } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';


const INITIAL_STATE = {    
    email: '',
    student_id: '',
    dw_api: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    console.log('doCreateUserWithEmailAndPassword',this.props.context)
    const { email, student_id,dw_api,passwordOne } = this.state;
    this.props.context.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
        this.props.context.updateUserAuth(authUser.user)
        this.props.context.doAddRecord('user_info').set({
          email: email,
          student_id: student_id,
          data_world_api: dw_api
        }).then(()=>{
          console.log('doCreateUserWithEmailAndPasswordAfter submisstion',this.props.context)
          console.log('this firestore is awesome')
          

        }).catch((error)=>{
          console.error('!!!', error)
        })
        this.setState({ ...INITIAL_STATE });

        // this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
        this.props.context.doGetQueryRecord('user_info','email','eaallen@byu.edu').then(querySnapshot=>{
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log('-----<>>>>!',data);
        })

      });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
        
        email,
        student_id,
        dw_api,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
    return (
        <Jumbotron>
      <div className='customForm'>
          <h3>Sign Up</h3>
        <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Control 
            
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group>  
          <Form.Control
            name="passwordOne"
            className='long-input color-box'
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
         </Form.Group>
         <Form.Group>     
          <Form.Control
            name="passwordTwo"
            className='long-input color-box'
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          /> 
          </Form.Group>  
          <Button onClick={this.onSubmit} className='option long-submit'>
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}

        </Form>
           <p className='form-text-sm'><Link to="/SignIn" className='form-text-sm'>Sign In To Your Account</Link></p>
      </div>
      </Jumbotron>
    );
  }
}

const SignUp = withFirebase(SignUpBase);
export default SignUp;