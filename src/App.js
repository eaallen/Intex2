import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import Checkout from './comps/Formik'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      marital_status: '',
      gender: '',
      income: '',
      children: '',
      cars: '',
      age: '',
      education: '',
      occupation: '',
      home_owner: '',
      commute_distance: '',
      region: '',

    }
  }

  handleChange(e){
    e.preventDefault()
    // let name =e.target.getAttribute('name')
    
    let new_state={[e.target.getAttribute('name')]: e.target.value}
    this.setState(new_state)

  }
  submit(e){
    e.preventDefault()
    window.f1('yes') 
    document.getElementById('msg').innerHTML = ''
  }
   //"Marital Status", "Gender", "Income", "Children", "Cars", "Age", "Education", "Occupation", "Home Owner", 
  //  "Commute Distance", "Region" ], "Values": [ [ "Married", "Male", "10000", "0", "2", "18", "graduate", "managment", 
  //  "yes", "0-1 miles", "Europe" 
  render(){
    return (
      <div className="App">
        <h1>
          Welcome To Get Around CORS!
        </h1>
        
          <Checkout></Checkout>
          <Button variant="primary" onClick={e=>this.submit(e)}>
            Get Results
          </Button>
       
        
        
        <button>code</button>
        

        <p id="msg"></p>
      </div>
    );
  }
}

export default App;
