document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // 1. FORMULÁRIO DE CONTATO
    // ===========================

    const formulario = document.querySelector(".form-contato");

    if (formulario) {

        formulario.addEventListener("submit", (evento) => {

            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {

                alert("Preencha todos os campos.");

                return;

            }

            alert(
                `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`
            );

            formulario.reset();

        });

    }

    // ===========================
    // 2. MENU COM ROLAGEM SUAVE
    // ===========================

    const linksMenu = document.querySelectorAll(
        'nav a[href^="#"], .btn-principal'
    );

    linksMenu.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {

                const header = document.querySelector("header").offsetHeight;

                window.scrollTo({

                    top: destino.offsetTop - header,

                    behavior: "smooth"

                });

            }

        });

    });

    // ===========================
    // 3. ANIMAÇÕES AO ROLAR
    // ===========================

    const elementos = document.querySelectorAll(
        ".card, .bloco-desafios article, .imagem-futuro-container, .fluxograma, .acessibilidade-card"
    );

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    elementos.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "0.6s";

        observador.observe(item);

    });

    // ===========================
    // 4. SIMULADOR DE AQUECIMENTO
    // ===========================

    const botao = document.getElementById("ligarSistema");
    const temperatura = document.getElementById("temperatura");

    if (botao && temperatura) {

        let temp = 24;
        let ligado = false;
        let intervalo;

        botao.addEventListener("click", () => {

            if (!ligado) {

                ligado = true;

                botao.innerHTML = "Desligar Sistema";

                intervalo = setInterval(() => {

                    if (temp < 32) {

                        temp += 0.5;

                        temperatura.innerHTML = temp.toFixed(1) + " °C";

                    }

                }, 1000);

            } else {

                ligado = false;

                botao.innerHTML = "Ligar Sistema";

                clearInterval(intervalo);

            }

        });

    }

    // ===========================
    // 5. BOTÃO VOLTAR AO TOPO
    // ===========================

    const topo = document.getElementById("voltarTopo");

    if (topo) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topo.style.display = "block";

            } else {

                topo.style.display = "none";

            }

        });

        topo.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ===========================
    // 6. ANO AUTOMÁTICO NO RODAPÉ
    // ===========================

    const ano = document.getElementById("ano");

    if (ano) {

        ano.textContent = new Date().getFullYear();

    }

});
