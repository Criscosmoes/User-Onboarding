import React from 'react';
import styled from 'styled-components'; 

const StyledForm = styled.div`

& {
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
    margin: 3%; 
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


`


const Form = ({onInputChange, values, onFormSubmit}) => {


    return (
        <StyledForm>
            <form onSubmit={onFormSubmit}>
                <label>
                    Name
                    <input type="text" name="name" value={values.name} onChange={onInputChange} /> 
                </label>

                <label>
                    Email
                    <input type="text" name="email" value={values.email} onChange={onInputChange} /> 
                </label>

                <label>
                    Password
                    <input type="password" name="password" value={values.password} onChange={onInputChange} /> 
                </label>

                <label className="check">
                    Terms of Service
                    <input type="checkbox" name="terms" onChange={onInputChange} /> 
                </label>

                <button type="submit">Submit</button>

            </form>
        </StyledForm>
    )
}


export default Form; 