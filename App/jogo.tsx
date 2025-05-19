import React, { useState } from 'react';

export default function JogoDaSenha() {
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState<string[]>([]);
  const [senha, setSenha] = useState<string | null>(null);
  const [mostrar, setMostrar] = useState(false);

  const gerarSenha = () => {
    let digitos: Set<number> = new Set();
    while (digitos.size < 4) {
      digitos.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digitos).join('');
  };

  const fazerTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^\d{4}$/.test(tentativa)) {
      alert('Digite 4 dígitos únicos!');
      return;
    }

    if (!senha) {
      const novaSenha = gerarSenha();
      setSenha(novaSenha);
    }

    const atual = senha ?? gerarSenha();
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === atual[i]) {
        bulls++;
      } else if (atual.includes(tentativa[i])) {
        cows++;
      }
    }

    const entrada = `${tentativa} - ${bulls} Bulls e ${cows} Cows`;
    setHistorico([entrada, ...historico]);

    if (bulls === 4) {
      alert('Parabéns! Você acertou a senha!');
    }

    setTentativa('');
  };

  const mostrarSenha = () => {
    if (!senha) {
      const novaSenha = gerarSenha();
      setSenha(novaSenha);
    }
    setMostrar(true);
  };

  return (
    <div>
      <header>
        <h1>Jogo da Senha (Bulls and Cows)</h1>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="jogo">
          <h2>Tente adivinhar a sequência de 4 dígitos únicos!</h2>
          <input
            type="text"
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value)}
            maxLength={4}
            placeholder="Digite um número..."
          />
          <button onClick={fazerTentativa}>Tentar</button>
          <button onClick={mostrarSenha}>Mostrar Senha</button>
          {mostrar && senha && (
            <p style={{ fontWeight: 'bold', color: 'red' }}>Senha: {senha}</p>
          )}
          <ul>
            {historico.map((entrada, index) => (
              <li key={index}>{entrada}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Danilo Teixeira</p>
      </footer>
    </div>
  );
}
