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

       function AtualizarFilm(){
        navigate(`/EditarFilme`, {
                state: { id: id }
            })
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
            <div>
              <iframe width="853" height="480" src={`https://www.youtube.com/embed/${filme.Teaser}`} title="O Poderoso Chefão | Especial 50 anos | Trailer Legendado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <img src={filme.imagem} alt="" />
        <h2><strong>{filme.titulo}</strong> <br></br><br></br>Sinopse:<br></br>{filme.descricao}<br></br><br></br><p>Duração:{filme.duracao}</p></h2>
          </div>
           <button onClick={()=> deletarFilme(id)}>Deletar filme</button>
         <button  onClick={()=> AtualizarFilm(id) }>Atualizar filme</button>
        </Container>
        <ButtonF></ButtonF>
        </Div>
      
      )

}