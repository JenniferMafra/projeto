import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdicionarFilme() {

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState("");

  async function adicionarFilme(e) {
    e.preventDefault();

    const newFilme = {
      titulo,
      descricao,
      duracao,
      imagem
    };

    try {
      await fetch("http://localhost:3000/filmes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newFilme)
      });

      navigate("/catalogo");

    } catch (error) {
      console.log("Erro ao adicionar filme ", error);
    }
  }

  return (
    <>
      <HeaderP/>
        <div>
          <h2><strong>Adicionar Filme</strong></h2>

          <form onSubmit={adicionarFilme} >

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
              placeholder="Duração em minutos"
                type="text"
                value={duracao}
                onChange={e => setDuracao(e.target.value)}
                required
              />
              
              <input 
              placeholder="URL da capa do filme"
                type="text"
                value={imagem}
                onChange={e => setImagem(e.target.value)}
                required
              />

            <button type="submit">Adicionar Filme</button>
          </form>
        </div>

      <ButtonF/>
    </>
  );
}
