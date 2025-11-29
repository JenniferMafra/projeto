import { Footer } from "./style"

export function Button(){
    function temaescuro(){
        document.body.style.backgroundColor='black'
    }
     function temaclaro(){
        document.body.style.backgroundColor='white'
    }
    return(
        <>
        <Footer>
             <button onClick={temaescuro}>Tema Escuro</button>
         <button onClick={temaclaro}>Tema Claro</button>
        </Footer>
       
        
        
        </>
    )
    
}