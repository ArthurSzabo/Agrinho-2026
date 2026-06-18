// Aguarda o carregamento do DOM para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO ---
    const formulario = document.querySelector(".form-contato");
    
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede o recarregamento padrão da página
            
            // Captura os valores dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            
            // Validação simples de segurança
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }
            
            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o projeto Agrinho foi recebida com sucesso.`);
            
            // Limpa o formulário após o envio
            formulario.reset();
        });
    }

    // --- 2. ROLAGEM SUAVE PARA OS LINKS DO MENU ---
    const linksMenu = document.querySelectorAll('nav a[href^="#"], .btn-principal');
    
    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault(); // Evita o pulo brusco
            
            const idAlvo = link.getAttribute("href");
            const elementoAlvo = document.querySelector(idAlvo);
            
            if (elementoAlvo) {
                // Calcula a altura do header fixo para não cobrir o título da seção
                const alturaHeader = document.querySelector("header").offsetHeight;
                const posicaoAlvo = elementoAlvo.offsetTop - alturaHeader;
                
                window.scrollTo({
                    top: posicaoAlvo,
                    behavior: "smooth" // Efeito de rolagem macio
                });
            }
        });
    });

    // --- 3. ANIMAÇÃO DE SURGIMENTO DOS CARDS (EFEITO SCROLL) ---
    const cards = document.querySelectorAll(".card, .bloco-desafios article");
    
    // Configura o observador para identificar quando o elemento entra na tela
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do card estiver visível
    });
    
    // Aplica o estado inicial oculto via JS e começa a observar
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
        observador.observe(card);
    });
});
