const API_URL = 'http://localhost:3000/Filmes'

async function getFilmes() {
    const res = await fetch(`${API_URL}`)
    const data = await res.json()

    

    for (let i = 0; i < data.length; i++) {
       console.log(data[i])
    }}
    getFilmes()