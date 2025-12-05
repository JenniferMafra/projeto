import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderP } from "../../components/header";
import { ButtonF } from "../../components/button";
import { Container, Container2 } from "./styled";

export function EditarFilme() {
  const navigate = useNavigate();
  const location = useLocation();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [imagem, setImagem] = useState('');

  

  async function atualizarFilme(id) {
   

    const newfilme = {
      titulo,
      descricao,
      duracao,
      imagem,
    }

    try {
      const res = await fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newfilme)
      }); 
      navigate('/catalogo')
       
    } catch (error) {
      console.log("Erro ao atualizar o filme ", error);
    } 
  }



  return (
    <Container>
      <HeaderP />

      <Container2>
        <h2>Editar Filme</h2>

        <form onSubmit={() => atualizarFilme(location.state.id)} >

          <input
            placeholder="Titulo do filme"
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />


          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            required
          >
          </textarea>

          <input
            placeholder="Duração"
            type="text"
            value={duracao}
            onChange={e => setDuracao(e.target.value)}
            required
          />

          <input
            placeholder="Url capa do filme"
            type="text"
            value={imagem}
            onChange={e => setImagem(e.target.value)}
            required
          />


          <button type="submit">Salvar Alterações</button>
          
        </form>
        

      </Container2>

      <ButtonF />
    </Container>

  );
}
