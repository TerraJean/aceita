document.addEventListener("DOMContentLoaded", () =>{
    const botaoNegativo = document.querySelector("#botao-negativo");
    botaoNegativo.addEventListener("mouseover", ()=>{        
        const x = Math.floor( Math.random() * (window.innerWidth - botaoNegativo.clientWidth))
        const y = Math.floor(Math.random() * (window.innerHeight - botaoNegativo.clientHeight))
        
        botaoNegativo.style.position = "absolute";
        botaoNegativo.style.left = `${x}px`;
        botaoNegativo.style.top = `${y}px`;

        
    })
})

function clique() {
    document.location.href = "https://www.youtube.com/watch?v=AwCAey4Qbmw&pp=ygUSbWVtZSBjb21lbW9yYcOnw6Nv"
    
}