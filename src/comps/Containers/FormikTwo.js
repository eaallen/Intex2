import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import { Button} from 'react-bootstrap';


//this is a xommit test

function PredictForm(props) {
    console.log('!!!!!!!!',props)
    return (
        <div>        
            <AnalysisController func={props.func} /><br />
            Summarized Results<br />
            show one or the other<br/>
            <Button variant="success">Good</Button><br />
            <Button variant="danger">Bad</Button>
        </div>
    )
}
export default PredictForm


const AnalysisController = props => {
    const [getError, setError] = React.useState(null)
    return (
        <Formik
            func={props.func}
            initialValues={{
                category_id: '1',
                donators: '2000',
                title: 'of orinthaw',
                description: 'we thre keinf',
                has_beneficiary: 'TRUE',
                visible_in_search: 'TRUE',
            }}
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
            <InputForm form={form} func={props.func}/>
        )}
        </Formik>
    )
}

const InputForm = props => (    
    <Form>        
        <First title="Input 1:" name="category_id" type="text" />
        <Input title="Input 2:" name="goal_usd" type="text" />
        <Input title="Input 3:" name="title" type="text" />
        <Input title="Input 4:" name="description" type="text" />
        <Option title="Input 5:" name="has_beneficiary" type="text" />
        <Option Input title="Input 6:" name="visible_in_search" type="dropdown" />
        <bs.Button type='submit' onClick={e=>handleSubmit(e,props.func,Object.values(props.form.values))}>Predict {console.log('PEOPSPSQOQ',props)}</bs.Button>
    </Form>    
)

const handleSubmit = async(e,func,formData) =>{
    e.preventDefault()
    console.log('______>',formData)
    

    document.getElementById(func).innerHTML = '' 

    if(func==='msg'){
        await window.f1(formData)   
    }else{
        console.log('fire')
        await window.f3(formData)  
    }

    // document.getElementById('msg').innerHTML = ''
    // await func()
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
const Option = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
                as='select'
            >
                <option value="TRUE">Yes</option>
                <option value="FALSE">No</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
const First = (props) =>(
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
                as='select'
            >
                <option value="1">Accidents & Emergencies</option>
                <option value="2">Animals & Pets</option>
                <option value="3">Babies Kids & Family</option>
                <option value="4">Business & Entrepreneurs</option>
                <option value="5">Celebrations & Events</option>
                <option value="6">Community & Neighbors</option>
                <option value="7">Creative Arts Music & Film</option>
                <option value="8">Dreams Hopes & Wishes</option>
                <option value="9">Education & Learning</option>
                <option value="10">Funerals & Memorials</option>
                <option value="11">Medical Illness & Healing</option>
                <option value="12">Missions Faith & Church</option>
                <option value="13">Other</option>
                <option value="14">Sports Teams & Clubs</option>
                <option value="15">Travel & Adventure</option>
                <option value="16">Volunteer & Service</option>
                <option value="17">Weddings & Honeymoons</option>
            </bs.Form.Control>
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