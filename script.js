document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO ---
    const formulario = document.querySelector(".form-contato");
    
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }
            
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o projeto Agrinho foi recebida com sucesso.`);
            formulario.reset();
        });
    }

    // --- 2. ROLAGEM SUAVE PARA OS LINKS DO MENU ---
    const linksMenu = document.querySelectorAll('nav a[href^="#"], .btn-principal');
    
    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault();
            
            const idAlvo = link.getAttribute("href");
            const elementoAlvo = document.querySelector(idAlvo);
            
            if (elementoAlvo) {
                const alturaHeader = document.querySelector("header").offsetHeight;
                const posicaoAlvo = elementoAlvo.offsetTop - alturaHeader;
                
                window.scrollTo({
                    top: posicaoAlvo,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. ANIMAÇÃO DE SURGIMENTO DOS CARDS E IMAGENS (EFEITO SCROLL) ---
    // Adicionado o seletor da nova imagem (.imagem-futuro-container) para animar junto!
    const elementosAnimados = document.querySelectorAll(".card, .bloco-desafios article, .imagem-futuro-container");
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1 
    });
    
    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(30px)";
        elemento.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
        observador.observe(elemento);
    });
});
