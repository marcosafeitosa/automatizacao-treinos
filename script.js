document.addEventListener('DOMContentLoaded', () => {
  verificarLogin(); // Verifica se o usuário já está logado ao carregar a página
});

function verificarLogin() {
  const usuarioInfo = localStorage.getItem('usuarioInfo');

  // Se as informações do usuário estiverem no localStorage, redireciona para "Página de Treinos"
  if (usuarioInfo) {
    window.location.href = 'pagina-treinos.html'; // Redireciona para a página de treinos
  }
}

// Função para salvar informações do usuário no localStorage
function salvarInformacoes() {
  const nick = document.getElementById('nick').value;
  const patente = document.getElementById('opcao1').options[document.getElementById('opcao1').selectedIndex].text; // Pega o texto da opção
  const supervisor = document.querySelector('input[name="supervisor"]:checked').value;

  // Salva as informações no localStorage
  localStorage.setItem('usuarioInfo', JSON.stringify({ nick, patente, supervisor }));

  // Redireciona para a "Página de Treinos" após o login
  window.location.href = 'pagina_de_treinos.html';
}

// Validação do formulário e chamada da função de salvar informações
(function() {
  'use strict';

  var form = document.querySelector('#loginForm');

  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // Previne o envio do formulário padrão
      salvarInformacoes(); // Chama a função para salvar informações e redirecionar
    }
    form.classList.add('was-validated');
  }, false);
})();