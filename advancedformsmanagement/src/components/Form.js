import React from 'react';
import styled from 'styled-components'; 

const StyledForm = styled.div`

& {
    margin: 2%; 
}

form {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    font-size: 3rem; 
}



label {
    text-align: center; 
    margin: 1.5%; 
    width: 15%; 
}

input {
    width: 100%; 
}


.check {
    font-size: 2rem; 
}

button {
    padding: .5%; 
    width: 5%; 
    background: lightgreen; 
}

p {
    font-size: 1.6rem; 
    color: red; 
    margin-top: 2%; 
}

`


const Form = ({onInputChange, values, onFormSubmit, errors, buttonDisabled}) => {


    return (
        <StyledForm>
            <form onSubmit={onFormSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={values.name} onChange={onInputChange} />
                    {errors.name.length !== 0 && <p>{errors.name}</p>} 
                </label>

                <label>
                    Email
                    <input type="text" name="email" value={values.email} onChange={onInputChange} /> 
                    {errors.email.length !== 0 && <p>{errors.email}</p>}
                </label>

                <label>
                    Password
                    <input type="text" name="password" value={values.password} onChange={onInputChange} /> 
                    {errors.password.length !== 0 && <p>{errors.password}</p>}
                </label>

                <label className="check">
                    Terms of Service
                    <input type="checkbox" name="terms" onChange={onInputChange} checked={values.terms} /> 
                    {errors.password.length !== 0 && <p>{errors.terms}</p>}
                </label>

                <button type="submit" disabled={buttonDisabled}>Submit</button>

            </form>
        </StyledForm>
    )
}


export default Form; 