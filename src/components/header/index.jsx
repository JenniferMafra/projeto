import { Container, LinksNavigation, LogoContainer, NavContainer } from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import { SignOutIcon } from "@phosphor-icons/react";


export function HeaderP() {
    function ClicouBotão() {
        navigate('/erro')
    }

    return (
        <>
         <Container id="page">
          <LogoContainer>
                <img src={logo} alt="" />
                <h1>Filmes catalogo</h1>
            </LogoContainer>
             <NavContainer>
                  <LinksNavigation onClick={ClicouBotão}>Reclamações<SignOutIcon size={16} /></LinksNavigation>
            
            </NavContainer>
    
        </Container>
        </>
    
    )
};