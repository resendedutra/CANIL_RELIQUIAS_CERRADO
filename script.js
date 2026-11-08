// VARIÁVEL 1: Para a Primeira Caixa
let count1 = 1;
let filhotes = setInterval(filhotesVendidos, 28);

function filhotesVendidos() {
    count1++; // Incrementa o número
    document.querySelector("#numero1").innerHTML = "+" + count1; // Atualiza no HTML
    
    if (count1 == 100) {
        clearInterval(filhotes); // Para a contagem
    }
}

// VARIÁVEL 2: Para a Segunda Caixa
let count2 = 1;
let clientes = setInterval(clientesAtendidos, 5);

function clientesAtendidos() {
    count2++; 
    document.querySelector("#numero2").innerHTML = "+" + count2; 
    
    if (count2 == 500) {
        clearInterval(clientes);
    }
}

// VARIÁVEL 3: Para a Terceira Caixa
let count3 = 1;
let adestrados = setInterval(caesAdestrados, 8);

function caesAdestrados() {
    count3++;
    document.querySelector("#numero3").innerHTML = "+" + count3;
    
    if (count3 == 300) {
        clearInterval(adestrados);
    }
}

// A linha abaixo garante que o script só rode depois que a página inteira carregar
document.addEventListener("DOMContentLoaded", function() {
    
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach((entrada) => {
            
            // Se o CONTAINER de serviços apareceu na tela
            if (entrada.isIntersecting) {
                
                // Procuramos todos os cards que estão DENTRO deste container
                const cards = entrada.target.querySelectorAll(".servicos-slots");
                
                // Colocamos a classe ".animar" em cada um deles
                cards.forEach((card) => {
                    card.classList.add("animar1");
                });
                
                // Desligamos o vigia para a animação não ficar repetindo
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1 // Dispara assim que 10% do container aparecer na tela
    });

    // Manda o vigia procurar e observar o CONTAINER (e não os cards soltos)
    const container = document.querySelector(".servicos-container");
    if (container) {
        observador.observe(container);
    }
});

// Pedigree
// Seleciona TODOS os botões que abrem os popups (retorna uma lista)
const botoesAbrir = document.querySelectorAll(".caes-pedigree");

// Seleciona TODOS os popups (retorna uma lista na mesma ordem)
const popups = document.querySelectorAll(".popup");

// Seleciona TODOS os botões de voltar/fechar
const botoesVoltar = document.querySelectorAll(".voltar-popup");

// 1. Configura a abertura de cada popup baseado na ordem (índice)
botoesAbrir.forEach((botao, index) => {
    botao.onclick = function() {
        // Abre o popup que tem a mesma posição/índice do botão clicado
        popups[index].showModal();
    };
});

// 2. Configura o fechamento de cada popup individualmente
botoesVoltar.forEach((botao, index) => {
    botao.onclick = function() {
        // Fecha o popup correspondente àquele botão de voltar
        popups[index].close();
    };
});


// ==========================================
// LÓGICA DO MENU HAMBÚRGUER (Tablet e Mobile)
// ==========================================
const menuHamburguer = document.getElementById('menu-hamburguer');
const menuLinks = document.getElementById('menu-links');
const linksDoMenu = menuLinks.querySelectorAll('a');

// Abre ou fecha o menu ao clicar no ícone do hambúrguer
menuHamburguer.addEventListener('click', () => {
    menuLinks.classList.toggle('ativo');
});

// Fecha o menu automaticamente ao clicar em qualquer link (Inicio, Sobre, etc)
linksDoMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('ativo');
    });
});