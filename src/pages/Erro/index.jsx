import { Container, Container2 } from "./style";
import { useNavigate } from "react-router-dom";
import {SpinnerGap , SmileySad, Bomb  } from "@phosphor-icons/react"

export function ErrorP(){
    const navigate=useNavigate()
     function irCatalogo(){
        navigate(`/Catalogo`)
      }
    return(
        <>
        <Container>
            <Container2>
            
            <h1>Filme Não Encontrado <SmileySad size={32} /></h1>
            <p>Tente novamente mais tarde. Talvez tenhamos o adiconado</p>
            <h2><SpinnerGap size={128} /></h2>
             <h1 >Caso tenha vindo fazer uma reclamação.</h1> 
             <p>Não volte pois nós não aceitamos reclamações.<Bomb size={32} weight="duotone" /></p>

            </Container2>
            <button onClick={irCatalogo}>Ir para Catalogo</button>
            
        </Container>
        </>
    )
}