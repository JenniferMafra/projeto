import {createBrowserRouter} from 'react-router-dom'
import { ErrorP } from './pages/Erro'
import { Catalogo } from './pages/catalogo'

export const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {path:'/catalogo', element:<Catalogo/>},
        ]
    },
    {
        path:'*',
        element:<ErrorP/>
    },
])