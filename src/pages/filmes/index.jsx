import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FilmeId(){
    const {id} = useParams()
    const [filme, setFilme] = useState(null)

    useEffect(() => {
        async function pegarFilmesId() {
          try {
            const res = await fetch(`http://localhost:3000/Filmes${id}`);
            const data = await res.json();
            setFilme(data);
          } catch (error) {
            console.log("Erro ao buscar o filme ", error);
          }
        }
        pegarFilmesId();
      }, [id]);

      return (
        <>
        <h1>HELLO</h1>
        <p>ABCDFEG</p>
        </>
      )

}