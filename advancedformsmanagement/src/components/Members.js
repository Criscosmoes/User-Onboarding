import React from 'react'; 
import styled from 'styled-components'; 


const StyledMembers = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    margin: 2%; 
}

.list {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
}


h2 {
    text-align: center; 
    margin: 2%; 
}

.user {
    border: 2px solid black; 
    margin: 2%; 
}

div {
    font-size: 4rem; 
}

`


const Members = ({users}) => {


    const renderedList = users.map(cur => {
        return (
            <div className="user">
                <h2>{cur.name}</h2>
                <h2>{cur.email}</h2>
            </div>
        )
    })


    return (
        <StyledMembers>
            <div>List of Users</div>
            <div className="list">
                {renderedList}
            </div>
        </StyledMembers>
    )
}


export default Members; 