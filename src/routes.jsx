import {createBrowserRouter} from 'react-router-dom'
import { ErrorP } from './pages/Erro'
import { Catalogo } from './pages/catalogo'
import { FilmeId } from './pages/filmes'

export const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {path:'/catalogo', element:<Catalogo/>},
            {path:'/filme/:id', element:<FilmeId/>},
        ]
    },
    {
        path:'*',
        element:<ErrorP/>
    },
])