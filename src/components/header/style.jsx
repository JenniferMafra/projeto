import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(204, 34, 34, 0.315);
    color:black;
    width: 90vw;
    padding:30px;
    box-shadow: 1px 1px 10px #000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;

`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:15px;

    img {
        height: 70px;
        width: 70px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 50px;

    :last-child {
        &:hover{
            background-color: rgba(255, 176, 176, 0.4);
        }
    }
    
`

export const LinksNavigation = styled.button`
    padding: 10px;
    cursor: pointer;
    border:none;
    background-color: rgba(80, 32, 32, 0.315);
    border-radius:10px;

    transition: border-bottom-color ;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        border-bottom: 1px solid black;
        background-color: rgba(236, 39, 39, 0.74);
    }
`
