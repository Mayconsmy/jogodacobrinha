# Jogo da Cobrinha (Snake Game)

Um clássico jogo da cobrinha desenvolvido em aula para a disciplina de multimídia.

## Membros da Equipe
- Maycon Soares Maia
- Pedro Henrique Pereira de Souza

---

## Sobre o Projeto

**O que a gente criou?**  
Criamos uma versão web interativa do clássico Jogo da Cobrinha (Snake Game), que roda de forma nativa e leve diretamente no navegador web.

**Qual foi a nossa ideia?**  
A ideia central foi construir uma aplicação multimídia do zero, sem depender de engines de jogos prontas ou frameworks externos. O foco foi aplicar conceitos fundamentais de desenvolvimento web e manipulação de gráficos 2D em tempo real.

**Quais mídias foram utilizadas?**  
Utilizamos mídias visuais dinâmicas bidimensionais (gráficos renderizados por código, compondo a interface gráfica e os elementos do jogo como a cobra e a comida) e mídias textuais (o placar de pontuação na tela).

**Onde a IA foi utilizada?**  
A Inteligência Artificial foi utilizada como ferramenta de auxílio ao desenvolvimento (pair programming). Ela ajudou a gerar a estrutura inicial do código (HTML, CSS e JavaScript), estruturou a lógica matemática de colisão da cobra no Canvas e ajudou na formatação da documentação do repositório.

**Quais ferramentas foram utilizadas?**  
- **Linguagens e APIs:** HTML5 (com foco na Canvas API), CSS3 e JavaScript ES6 (Vanilla JS).
- **Ambiente de Desenvolvimento:** Editor de texto/código (VS Code), Git via terminal (Ubuntu) para controle de versão e GitHub para armazenamento do repositório.

**O que vocês aprenderam durante o desenvolvimento?**  
Durante a implementação, aprendemos na prática vários conceitos de programação e multimídia:
- **Game Loop:** Como criar e gerenciar ciclos de atualização contínua de tela utilizando temporizadores (`setInterval`).
- **Renderização Gráfica:** Como desenhar e apagar elementos geométricos em um plano cartesiano usando o contexto 2D do HTML5 Canvas.
- **Interatividade:** Como capturar os inputs do usuário de forma assíncrona, interceptando eventos de teclado (`keydown`) para controlar a direção do jogo.
- **Controle de Estado e Lógica:** Como manipular arrays para fazer o corpo da cobra "seguir" a cabeça e aplicar matemática básica para detectar colisões com os limites da tela e com o próprio corpo.

---

## Estrutura do Projeto

O projeto é minimalista e contido em apenas três arquivos de código, além deste README:

- `index.html`: Estrutura do jogo, contendo o elemento Canvas onde o jogo é renderizado.
- `style.css`: Estilização da interface, garantindo um visual limpo e centralizado.
- `script.js`: Lógica completa do jogo, incluindo loop de renderização, movimentação, sistema de colisão e pontuação.

## Como Jogar

1. Salve os três arquivos (`index.html`, `style.css`, `script.js`) na mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.
3. Utilize as **setas do teclado** (Cima, Baixo, Esquerda, Direita) para mover a cobrinha.
4. Coma os quadrados vermelhos para aumentar sua pontuação e o tamanho da cobrinha.
5. O jogo termina se a cobrinha bater nas paredes do cenário ou em si mesma.
6. Clique no botão **"Reiniciar Jogo"** para tentar novamente após um Game Over.
