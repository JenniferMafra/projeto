import { Container } from "./style";

export function UserCard({ titulo, duração}) {
  return (
    <Container>
      <h1>Nome: {titulo}</h1>
      <h1>Email: {duração}</h1>
    </Container>
  );
}