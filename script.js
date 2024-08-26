class Usuario {
  constructor(nick, patente) {
    this.nick = nick;
    this.patente = patente;
  }

  salvarNoStorage() {
    localStorage.setItem('usuario', JSON.stringify(this));
  }

  static carregarDoStorage() {
    const usuarioDados = localStorage.getItem('usuario');
    if (usuarioDados) {
      const dados = JSON.parse(usuarioDados);
      return new Usuario(dados.nick, dados.patente);
    }
    return null;
  }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nick = document.getElementById('nick').value;
  const patente = document.getElementById('patente').value;

  const usuario = new Usuario(nick, patente);
  usuario.salvarNoStorage();

  alert('Login realizado com sucesso!');
  // Redirecionar para outra página, se necessário
  // window.location.href = 'pagina_destino.html';
});