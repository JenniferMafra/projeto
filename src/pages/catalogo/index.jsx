import { useEffect, useState } from "react";
import { UserCard } from "../../components/card";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import {ButtonF} from "../../components/button/index.jsx"
import {HeaderP} from "../../components/header/index.jsx"
export function Catalogo(){

    const navigate =useNavigate()

  const [filmeList, setFilmeList] = useState([]);

  useEffect(() => {
    async function pegarFilmes() {
      try {
        const res = await fetch(`http://localhost:3000/filmes`);
        const data = await res.json();
        setFilmeList(data);
      } catch (error) {
        console.log("Erro ao buscar os filmes ", error);
      }
    }
    pegarFilmes();
  }, []);



     function Abrirfilme(id){
        navigate(`/filme/${id}`)
      }
       function AdicionarFilme(){
        navigate(`/AdicionarFilme`)
      }
     
    

  return (
    
      <Container>
        <HeaderP/>
         {filmeList.map((filme) => (
          <div key={filme.id} onClick={()=> Abrirfilme(filme.id)}>
            <UserCard titulo={filme.titulo} duracao={filme.duracao} imagem={filme.imagem}/>
          </div>
      ))}
      <button onClick={() => AdicionarFilme()}>Adicionar um novo filme</button>
     <ButtonF></ButtonF>
      </Container>
      
  );
}
