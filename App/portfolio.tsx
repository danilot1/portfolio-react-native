import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <header>
        <img src="my_photo.png" alt="Foto de perfil de Danilo Teixeira" />
        <h1>Portfólio - Danilo Teixeira</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="jogo.html">Jogo da Senha</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            - Estudante de Ciência da Computação na Universidade Católica de Pernambuco.<br />
            - Desenvolvedor de software com experiência em HTML, CSS e JavaScript.<br />
            - Também possuo experiência nas linguagens Python, C e Java.
          </p>
          <p>
            Sou estudante de Ciência da Computação e busco atuar desenvolvendo softwares e resolvendo
            problemas. Minhas áreas de interesse incluem desenvolvimento web (front-end), ciência de dados
            e cibersegurança.
          </p>

          <h2>Formação</h2>
          <p>
            <strong>Bacharel em Ciência da Computação</strong><br />
            Universidade Católica de Pernambuco<br />
            Recife, PE — 2023 - 2027 (em andamento)
          </p>
          <p>
            <strong>Técnico em Análise e Desenvolvimento de Sistemas</strong><br />
            Escola Técnica Estadual Cícero Dias<br />
            Recife, PE — 2021.2 - 2022
          </p>

          <h2>Estágio</h2>
          <p>
            <strong>NUTES</strong> — Núcleo de Telessaúde do HC/UFPE<br />
            Recife — 2023.1 - 2023.2
          </p>

          <h2>Serviço Comunitário</h2>
          <p>
            <strong>Jogos Lúdicos para Idosos</strong><br />
            Projeto realizado pela UNICAP em parceria com o Instituto Social das Medianeiras da Paz (ISMEP),
            que atende cerca de 40 idosas no bairro do Pina.<br />
            Objetivo: estimular memória e raciocínio por meio de jogos lúdicos.<br />
            Período: 2023.2 - 2024
          </p>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          <p>Veja alguns dos meus projetos no GitHub:</p>
          <a
            href="https://github.com/danilot1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/danilot1
          </a>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>
            Email:{' '}
            <a href="mailto:dantecarvalho2803@gmail.com">
              dantecarvalho2803@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/danilo-teixeira-de-carvalho-b0394a241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Danilo Teixeira</p>
      </footer>
    </div>
  );
}
