import React, { useState, useEffect } from 'react'; 
import Form from './Form'; 
import './App.css'; 
import * as yup from 'yup'; 
import axios from 'axios'; 
import Members from './Members';


const App = () => {


    const initialValues = {
        name: '', 
        email: '', 
        password: '', 
        terms: false, 
    }
    
    const [values, setValues] = useState(initialValues); 
    const [errors, setErrors] = useState({...initialValues, terms: ''})
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [users, setUsers] = useState([]); 

    


    // validate whether value meets the schema
    const validateChange  = (e) => {

        e.persist(); 

        //reach allows us to check a specific value of the schema

        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => setErrors({
            ...errors, 
            [e.target.name]: "", 
        }))
        .catch(error => {
            setErrors({
                ...errors,
                [e.target.name]: error.message, 
            })
        })

    }


    const onInputChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 

        setValues({
            ...values,
            [e.target.name]: value
        })

        validateChange(e); 
    }


    const onFormSubmit = (e) => {
        e.preventDefault(); 


        axios.post('https://reqres.in/api/users', values)
        .then(res => {
            console.log(res.data)
            setUsers([...users, res.data])
        })
        .catch(err => {
            console.log(err); 
        })

        setValues(initialValues); 
    }

    let formSchema = yup.object().shape({
        name: yup.string().required('Please provide name'), 

        email: yup.string().required('Please provide an email').email('Not a valid email'), 

        password: yup.string().required('Password is required').min(8, 'Password is too short, should be atleast 8 characters'), 

        terms: yup.boolean().oneOf([true], "Please agree to the terms and conditions"), 

    })

    useEffect(() => {

        formSchema.isValid(values)
        .then(valid => setButtonDisabled(!valid))


    }, [values, formSchema])


    return (
        <div>
            <Form onInputChange={onInputChange} onFormSubmit={onFormSubmit} values={values} errors={errors} buttonDisabled={buttonDisabled}/> 
            <Members users={users} /> 
        </div>
    )
}


export default App; 