import {createBrowserRouter} from 'react-router-dom'
import { ErrorP } from './pages/Erro'
import { Catalogo } from './pages/catalogo'
import { FilmeId } from './pages/filmes'
import { AdicionarFilme } from './pages/adiconarFilme'
import {EditarFilme} from './pages/AtualizarFilme'

export const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {path:'catalogo', element:<Catalogo/>},
            {path:'AdicionarFilme', element:<AdicionarFilme/>},
            {path:'EditarFilme', element:<EditarFilme/>},
            {path:'filme/:id', element:<FilmeId/>},
        ]
    },
    {
        path:'*',
        element:<ErrorP/>
    },
])