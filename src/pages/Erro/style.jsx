import styled from 'styled-components'

export const Container =styled.div`
height:100vh;
width:100vw;
background:linear-gradient(#0b2379,#561010);
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;

button{
    height:50px;
    width:100px;
    margin:20px;
    border-radius:10px;
    border:none;
    cursor:pointer;
}

`

export const Container2 =styled.div`

color:white;
display:flex;
gap:5px;
align-items:center;
flex-direction:column;
justify-content:center;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size:16px;

h2{ 
    @keyframes girar{
        0%{
            transform:rotate(0deg)
        }
        100%{
            transform:rotate(360deg)
        }
    }
    animation-name:girar;
    animation-duration:30s;
}
`