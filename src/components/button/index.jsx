import { Footer } from "./style"

export function ButtonF(){
    function temaescuro(){
        document.body.style.backgroundColor='black'
    }
     function temaclaro(){
        document.body.style.backgroundColor='lavender'
    }
    return(
        <>
        <Footer>
             <button onClick={temaescuro}>tema escuro</button>
         <button onClick={temaclaro}>tema claro</button>
        </Footer>
        </>
    )
}