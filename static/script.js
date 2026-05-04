// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})

// Ativar carregamento no botão de enviar formulário para
const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

// Só adiciona o evento se o botão existir na tela
if (btnEnviar) {
  btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
  })
}

// Tira a mensagem de sucesso depois de 5 segundos
setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 5000)

// Cálculo dinâmico de idade
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  // Subtrai 1 ano se o mês atual for anterior ao mês do aniversário 
  // ou se for o mês do aniversário, mas o dia ainda não chegou.
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Injeta a idade calculada no elemento HTML
const spanIdade = document.getElementById('idade-dinamica');

if (spanIdade) {
  // Informe a data de nascimento no formato 'AAAA-MM-DD'
  spanIdade.textContent = calcularIdade('1996-10-19') + ' anos';
}

// Barra de Progresso do Scroll
window.addEventListener('scroll', () => {
  // Captura o quanto a página já foi rolada para baixo
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Calcula o tamanho total rolável da página
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // Transforma em porcentagem
  const scrolled = (winScroll / height) * 100;
  
  // Aplica a largura na barra lá do topo
  document.getElementById("myBar").style.width = scrolled + "%";
});

// =========================================
// EFEITO TYPEWRITER NO TERMINAL
// =========================================
const textToType = `def init_system():
    print("Hello, World!")
    
    # Carregando módulos...
    print("Otimizando processos B2B...")
    print("Automatizando rotinas operacionais...")
    
    return "Sistemas prontos para escalar."

init_system()`;

const typeWriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    // Adiciona a próxima letra
    typeWriterElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    
    // Velocidade de digitação (varia levemente para parecer humano)
    let typingSpeed = Math.floor(Math.random() * 50) + 30; 
    setTimeout(typeWriter, typingSpeed);
  }
}

// Inicia a digitação 1 segundo após a página carregar
if (typeWriterElement) {
  setTimeout(typeWriter, 1000);
}