import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Div } from "./style";
import {ButtonF} from "../../components/button/index.jsx"
import { HeaderP } from "../../components/header";

export function FilmeId(){
    const {id}= useParams()
    const navigate =useNavigate()

    const [filme, setFilme] = useState(null)

    useEffect(() => {
        async function pegarFilmesId() {
          try {
            const res = await fetch(`http://localhost:3000/filmes/${id}`);
            const dataa = await res.json();
            setFilme(dataa);
          } catch (error) {
            console.log("Erro ao buscar o filme ", error);
          }
        }
        pegarFilmesId(id);
      }, [id]);


      async function deletarFilme(id){
        try{
          const res =  await fetch(`http://localhost:3000/filmes/${id}`,{
            method: 'DELETE',
          });

          navigate("/catalogo")

        }catch (error) {
            console.log("Erro ao deletar o filme ", error);
          }
      } 


      if(!filme){
        return(
          <p>..carregand</p>
        )
      
      }
  
      return (
        <Div>
          <HeaderP/>
        <Container>
          <div>
            <img src={filme.imagem} alt="" />
        <h2><strong>{filme.titulo}</strong> <br></br><br></br>Sinopse:<br></br>{filme.descricao}<br></br><br></br><p>Duração:{filme.duracao}</p></h2>
          </div>
        </Container>
        <button onClick={()=> deletarFilme(id)}>Deletar filme</button>
        <ButtonF></ButtonF>
        </Div>
      
      )

}