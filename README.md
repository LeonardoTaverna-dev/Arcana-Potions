# 🧪 Arcana Potions

<p align="center">
  <strong>Uma experiência web inspirada em alquimia, magia e poções.</strong>
</p>

<p align="center">
  Projeto front-end desenvolvido com HTML, CSS e JavaScript puro, com foco em interatividade, organização de código e experiência do usuário.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-HTML-orange?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-CSS-blue?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black">
</p>

---

## 📖 Sobre o projeto

**Arcana Potions** é uma aplicação web temática que simula uma loja de poções mágicas.

O projeto foi desenvolvido utilizando apenas **HTML, CSS e JavaScript**, sem frameworks ou bibliotecas externas, explorando conceitos fundamentais do desenvolvimento front-end.

Além da construção visual, o projeto trabalha com manipulação do DOM, navegação entre páginas, filtros, parâmetros na URL, gerenciamento de itens e armazenamento local de dados.

A proposta é unir aprendizado técnico a uma identidade visual própria, criando uma experiência mais completa do que uma página estática tradicional.

---

## ✨ Funcionalidades

O projeto possui:

- 🧪 Catálogo de poções
- 🔮 Filtros de produtos por poder
- 📜 Página individual com detalhes de cada poção
- 🔗 Identificação de produtos através de parâmetros na URL
- 🎒 Bolsa para adicionar e remover produtos
- ➕ Controle de quantidade dos itens
- 💰 Cálculo automático do valor total
- 🌙 Temas **Noturno** e **Eclipse**
- 💾 Persistência de informações utilizando armazenamento local
- 📖 Grimório com informações sobre as poções
- 📱 Interface adaptada para diferentes tamanhos de tela
- ⚡ Conteúdo essencial disponível mesmo sem JavaScript

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura e conteúdo das páginas |
| **CSS3** | Identidade visual, componentes, animações e responsividade |
| **JavaScript** | Interatividade, filtros, produtos, temas e bolsa |
| **LocalStorage** | Persistência de informações no navegador |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem e gerenciamento do código |

---

## 📂 Estrutura do projeto

```text
Arcana-Potions/
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── script.js
│   └── theme.js
│
├── pages/
│   ├── carrinho.html
│   ├── como-funciona.html
│   ├── grimorio.html
│   ├── pocoes.html
│   ├── produto.html
│   └── sobre.html
│
├── index.html
└── README.md
```

### Principais arquivos

**`index.html`**  
Página inicial da aplicação.

**`pages/`**  
Contém as páginas de catálogo, detalhes das poções, bolsa, grimório, funcionamento e apresentação do projeto.

**`css/style.css`**  
Responsável pela identidade visual, componentes e adaptação da interface para diferentes tamanhos de tela.

**`js/data.js`**  
Centraliza os dados das poções utilizados pelas páginas e pela bolsa.

**`js/theme.js`**  
Responsável pela restauração antecipada do tema escolhido pelo usuário.

**`js/script.js`**  
Concentra as principais funcionalidades da aplicação, incluindo temas, filtros, produtos e gerenciamento da bolsa.

---

## ⚙️ Como executar

O projeto não necessita de instalação, dependências ou processo de compilação.

Clone o repositório:

```bash
git clone https://github.com/LeonardoTaverna-dev/Arcana-Potions.git
```

Entre na pasta:

```bash
cd Arcana-Potions
```

Depois, abra o arquivo:

```text
index.html
```

diretamente no navegador.

Para desenvolvimento, é recomendado utilizar um servidor local, como o **Live Server** no Visual Studio Code.

---

## 🧠 Detalhes técnicos

O catálogo e a página inicial possuem cartões definidos diretamente no HTML, permitindo que parte importante do conteúdo continue disponível mesmo caso o JavaScript esteja desabilitado ou não seja carregado.

Os dados utilizados dinamicamente pela aplicação são centralizados em `data.js`.

Por isso, alterações em nomes ou descrições das poções podem exigir a atualização correspondente dos cartões presentes no HTML e das informações exibidas no grimório.

O armazenamento local é utilizado de forma complementar. Caso esteja indisponível ou bloqueado pelo navegador, a aplicação pode continuar funcionando durante a sessão atual.

Os frascos e diversos elementos visuais são construídos utilizando **CSS**, reduzindo a dependência de recursos externos.

O projeto também utiliza fontes disponíveis localmente no sistema e não depende de bibliotecas ou frameworks externos para seu funcionamento principal.

---

## 🎯 Objetivo do projeto

O **Arcana Potions** foi desenvolvido como parte dos meus estudos em desenvolvimento de software, com o objetivo de aplicar na prática conceitos fundamentais de desenvolvimento front-end.

Entre os principais conhecimentos trabalhados estão:

- Estruturação semântica com HTML
- Estilização e responsividade com CSS
- Lógica de programação com JavaScript
- Manipulação do DOM
- Eventos e interação com o usuário
- Organização e reutilização de dados
- Persistência local no navegador
- Navegação utilizando parâmetros na URL
- Organização de arquivos e responsabilidades
- Controle de versão utilizando Git e GitHub

---

## 🚀 Demonstração

O projeto será disponibilizado através do **GitHub Pages**.

🔗 **Acessar Arcana Potions:** `Link em breve`

---

## 🔮 Próximas melhorias

O projeto continuará evoluindo conforme avanço nos estudos de Engenharia de Software e desenvolvimento web.

Algumas possibilidades de evolução:

- Aprimorar a responsividade
- Melhorar acessibilidade e navegação por teclado
- Expandir o catálogo de poções
- Adicionar novas interações e animações
- Aprimorar o gerenciamento da bolsa
- Refatorar componentes e funções JavaScript
- Evoluir a organização e arquitetura do código

---

## ⚠️ Sobre o conteúdo

Arcana Potions é um projeto fictício desenvolvido para fins educacionais e de portfólio.

As poções, ingredientes, efeitos e demais elementos apresentados fazem parte do universo fictício da aplicação. O projeto não realiza vendas, pagamentos ou coleta de dados para transações comerciais.

---

## 👨‍💻 Autor

**Leonardo Taverna**

Estudante de **Engenharia de Software**, com foco no desenvolvimento de conhecimentos em programação e desenvolvimento web.

Este projeto faz parte do meu portfólio e representa minha evolução prática durante os estudos.

---

<p align="center">
  Desenvolvido por <strong>Leonardo Taverna</strong> 🧪
</p>