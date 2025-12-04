import styled from 'styled-components'

export const Container = styled.div`
height:100vh;
align-items:center;
justify-content:center;
display:flex;

`
export const Container2 = styled.div`
height:40vh;
width:30vw;
flex-direction:column;
display:flex;
align-items:center;
justify-content:center;
background-color:#1609d4b9;
form{
    gap:8px;
    margin:10px;
    display: flex;
    flex-direction:column;
    align-items:center;
}
input{
    
     width:150px;
    height:30px;
    border-radius:5px;

}
textarea{
     border-radius:5px;
    border:none;
    width:150px;
    height:30px;

}
button{
    height:30px;
    width:100px;
    color:white;
    border-radius:5px;
    cursor:pointer;
    background-color:#59a171;
    border:none;
}
`