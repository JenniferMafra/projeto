import { Container } from "./style";

export function UserCard({ titulo, duracao , imagem}) {
  
  return (
    <Container>
      <img src={imagem} alt=""  />
      <h1>Nome: {titulo}</h1>
      <h1>Duração: {duracao}</h1>
    </Container>
  );
}