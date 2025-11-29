import { Container, Container2 } from "./style";
import robo from "../../assets/robo.avif"
import { HeaderP } from "../../components/header";
import { Button } from "../../components/button";

export function ErrorP(){
    return(
        <>
        <Container>
            <Container2>
            
            <h1>Filme Não encontrado.</h1>
            <img src={robo} alt="" />
             <h1 >Nós não aceitamos reclamações.</h1>
            <Button></Button>

            </Container2>
            
        </Container>
        </>
    )
}