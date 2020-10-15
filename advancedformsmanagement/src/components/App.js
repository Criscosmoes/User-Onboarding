import React, { useState } from 'react'; 
import Form from './Form'; 
import './App.css'; 


const App = () => {


    const initialValues = {
        name: '', 
        email: '', 
        password: '', 
        terms: false, 
    }
    
    const [values, setValues] = useState(initialValues); 


    const onInputChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 

        setValues({
            ...values,
            [e.target.name]: value
        })
    }


    const onFormSubmit = (e) => {
        e.preventDefault(); 
    }


    return (
        <div>
            <Form onInputChange={onInputChange} onFormSubmit={onFormSubmit} values={values}/> 
        </div>
    )
}


export default App; 