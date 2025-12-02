import { useEffect, useState } from "react";
import { UserCard } from "../../components/card";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export function Catalogo(){
    const API_URL = 'http://localhost:3000/Filmes'

    const navigate =useNavigate()


  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function pegarFilmes() {
      try {
        const res = await fetch(`http://localhost:3000/Filmes`);
        const data = await res.json();
        setUserList(data);
      } catch (error) {
        console.log("Erro ao buscar os filmes ", error);
      }
    }
    pegarFilmes();
  }, []);


    async function PegarId(id) {
      try {
        const res = await fetch(`http://localhost:3000/Filmes/${id}`);
        const data = await res.json();
        setUserList(data);
      } catch (error) {
        console.log("Erro ao buscar filme", error);
      }
     
    }

     function Abrirfilme(id){
        navigate("/filme/:id")
      }
    

  return (
      <Container>
         {userList.map((user) => (
          <div key={user.id} onClick={()=> Abrirfilme(user.id)}>
            <UserCard titulo={user.titulo} duração={user.duração} imagem={user.imagem}/>
          </div>
      ))}
     
      </Container>
      
  );
}
