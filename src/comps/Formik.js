import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import Spinner from 'react-bootstrap/Spinner'
import { Container, Row, Col, Button, Jumbotron} from 'react-bootstrap';

//this is a xommit test

function PredictForm(props) {
    
    return (
        <div>        
            <AnalysisController /><br />
            Will you reach your goal?<br />
            show one or the other<br/>
            <Button variant="success">Yes</Button>
            <Button variant="danger">No</Button>
        </div>
    )
}
export default PredictForm


const AnalysisController = props => {
    const [getError, setError] = React.useState(null)
    return (
        <Formik
            // initialValues={{
            //     input1: 'first',
            //     input2: 'second',
            //     input3: 'third',
            //     input4: 'fourth',
            //     input5: 'fifth',
            //     input6: 'sixth',
            // }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                let arr_values = Object.keys(values)
                arr_values.map( item =>{
                    if(values.input1 === ''){
                        errors.name = 'Please fill out input 1'
                    }
                    if(values.input2 === ''){
                        errors.name = 'Please fill out input 2'
                    }
                    if(values.input3 === ''){
                        errors.name = 'Please fill out input 3'
                    }
                    if(values.input4 === ''){
                        errors.name = 'Please fill out input 4'
                    }
                    if(values.input5 === ''){
                        errors.name = 'Please fill out input 5'
                    }
                    if(values.input6 === ''){
                        errors.name = 'Please fill out input 6'
                    }
                })
                
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('PREDICTING...')
            }}
        >
        {form => (
            <InputForm form={form}/>
        )}
        </Formik>
    )
}

const InputForm = props => (
    <Form>
        <Input title="Input 1:" name="input1" type="text" />
        <Input title="Input 2:" name="input2" type="text" />
        <Input title="Input 3:" name="input3" type="text" />
        <Input title="Input 4:" name="input4" type="text" />
        <Input title="Input 5:" name="input5" type="text" />
        <Input title="Input 6:" name="input6" type="text" />
        <bs.Button type='submit' variant="dark" onClick={e=>handleSubmit(e, 'yes')}>Analyze</bs.Button>
    </Form>    
)

const handleSubmit = async(e, yes) =>{
    e.preventDefault()
    document.getElementById('msg').innerHTML = ''
    await window.f1(yes)
}

const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)

const CARD_ELEMENT_OPTIONS = {
    style: {
        base:{
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    }
    
}