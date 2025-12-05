import { Container, LinksNavigation, LogoContainer, NavContainer } from "./style";
import {  useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import { SignOutIcon } from "@phosphor-icons/react";


export function HeaderP() {
    const navigate= useNavigate()
    
    function ClicouBotão() {
        navigate('/erro')
    }

    function IrCatalogo(){
    navigate('/catalogo')
  }

    return (
        <>
         <Container id="page">
          <LogoContainer>
                <img src={logo} alt="" />
                <h1>Catalogo de filmes</h1>
            </LogoContainer>
             <NavContainer>
                <LinksNavigation onClick={IrCatalogo}>Ir para catalogo</LinksNavigation>
                  <LinksNavigation onClick={ClicouBotão}>Reclamações<SignOutIcon size={16} /></LinksNavigation>
            
            </NavContainer>
    
        </Container>
        </>
    
    )
};