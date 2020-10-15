import React from 'react'; 
import styled from 'styled-components'; 


const StyledMembers = styled.div`

& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    height: 40vh; 
}


h2 {
    text-align: center; 
    margin: 2%; 
}

div {
    border: 2px solid black; 
}


`


const Members = ({users}) => {


    const renderedList = users.map(cur => {
        return (
            <div>
                <h2>{cur.name}</h2>
                <h2>{cur.email}</h2>
            </div>
        )
    })


    return (
        <StyledMembers>
            {renderedList}
        </StyledMembers>
    )
}


export default Members; 