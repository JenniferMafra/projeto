import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function EditarFilme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarFilme() {
      try {
        const resposta = await fetch(`http://localhost:3000/filmes/${id}`);
        const filme = await resposta.json();

        setTitulo(filme.titulo);
        setDescricao(filme.descricao);
        setDuracao(filme.duracao);
        setImagem(filme.imagem);
        setCarregando(false);
      } catch (error) {
        console.log("Erro ao carregar filme: ", error);
      }
    }

    carregarFilme();
  }, [id]);

  async function atualizarFilme(e) {
    e.preventDefault();

    const filmeAtualizado = {
      titulo,
      descricao,
      duracao,
      imagem
    };

    try {
      await fetch(`http://localhost:3000/filmes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filmeAtualizado)
      });

      navigate("/catalogo"); 

    } catch (error) {
      console.log("Erro ao atualizar filme: ", error);
    }
  }

  if (carregando) {
    return <p>Carregand...</p>;
  }

  return (
    <>
      <HeaderP/>

        <div >
          <h2>Editar Filme</h2>

          <form onSubmit={atualizarFilme} >

      
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
              ></textarea>
            
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
        </div>
      <ButtonF/>
  </>
  );}
