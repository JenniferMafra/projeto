import { Container } from "./style";
import eradogelo from "../../assets/Eradogelo.webp"

export function UserCard({ titulo, duração , imagem}) {
  
  return (
    <Container style={{ backgroundImage: `url(${imagem})` }}>

      <h1>Nome: {titulo}</h1>
      <h1>Email: {duração}</h1>
    </Container>
  );
}