import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import Spinner from 'react-bootstrap/Spinner'
import { Container, Row, Col, Button, Jumbotron} from 'react-bootstrap';

//this is a xommit test

function Checkout(props) {
    
    return (
      
        <CheckoutController />
       
    )
}
export default Checkout


const CheckoutController = props => {
    const [getError, setError] = React.useState(null)
    return (
        <Formik
            initialValues={{
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                // state: 'UT',
                zipcode: '84602',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                let arr_values = Object.keys(values)
                arr_values.map( item =>{
                    if(!values[item]){
                        errors[item] = 'Required'
                    }
                })
                
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('submit')
            }}
        >{form => (
            <PaymentForm form={form}/>
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <Form >
        {Object.keys(props.form.initialValues).map(item=>{
            return(
                <Input title="Name:" name={item} type="text" disabled={props.form.isSubmitting}/>
            )
        })}
           
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
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