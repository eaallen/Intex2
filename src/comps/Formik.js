import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'

//this is a xommit test

function PredictForm(props) {
    return (
        <div className='text-left'>
            <AnalysisController func={props.func} /><br />
        </div>
    )
}
export default PredictForm


const AnalysisController = props => {
    return (
        <Formik

            func={props.func}
            initialValues={{
                category_id: '1',
                goal_usd: '',
                title: '',
                description: '',
                has_beneficiary: 'TRUE',
                visible_in_search: 'TRUE',
                is_charity:'TRUE'
            }}

            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                
                    if(values.title === ''){
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
                
                
                return errors
            }}
            onSubmit={async (values, actions) => {
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


        <First title="Category" name="category_id" type="text" />
        <Input title="Goal in Dollars" name="goal_usd" type="text" />
        <Input title="Title" name="title" type="text" />
        <Input title="Description" name="description" type="text" />
        <Option title="Has a Beneficiary" name="has_beneficiary" type="text" />
        <Option Input title="Visible in Search" name="visible_in_search" type="dropdown" />
        <Option Input title="Is Charity:" name="is_charity" type="dropdown" />

        <bs.Button type='submit' variant="dark" onClick={e=>handleSubmit(e,props.func,Object.values(props.form.values))}>Predict </bs.Button>

    </Form>    
)

const handleSubmit = async(e,func,formData) =>{
    e.preventDefault()
    

    document.getElementById('msg').innerHTML = ''
    document.getElementById('msg2').innerHTML = ''

    if(func==='msg'){
        await window.f1(formData)   
    }else{
        await window.f3(formData)  
    }

    // document.getElementById('msg').innerHTML = ''
    // await func()
}

const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           <bs.Form.Label >{props.title}</bs.Form.Label>
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                
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
           <bs.Form.Label>{props.title}</bs.Form.Label>
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
           <bs.Form.Label>{props.title}</bs.Form.Label>
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

