import { useEffect, useState } from "react";
import { UserCard } from "../../components/card";

export function Catalogo(){
    const API_URL = 'http://localhost:3000/Filmes'


/*
    for (let i = 0; i < data.length; i++) {
       console.log(data[i])
    }}
*/
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
/*

   useEffect(() => {
    async function PegarId() {
      try {
        const res = await fetch(`http://localhost:3000/Filmes/1`);
        const data = await res.json();

        setUserList(data);
      } catch (error) {
        console.log("Erro ao buscar os filmes ", error);
      }
    }

    PegarId();
  }, []);
*/
  return (
    <div>
      {userList.map((user) => (
        <UserCard titulo={user.titulo} duração={user.duração} />
      ))}
    </div>

  );
}
