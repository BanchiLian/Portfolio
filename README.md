# Portfólio | Elian Mori

Portfólio pessoal criado para apresentar minha trajetória, habilidades e projetos como desenvolvedor web. A interface foi desenvolvida com tecnologias nativas da web, priorizando responsividade, acessibilidade, organização e uma experiência visual minimalista.

[Acessar portfólio](https://banchilian.github.io/Portif-lio/) · [GitHub](https://github.com/BanchiLian)

## Visão geral

O projeto funciona como uma aplicação de página única: as seções são alternadas por JavaScript sem recarregar o navegador. A navegação aceita links diretos, como `#projetos` e `#contato`, e a preferência de tema é mantida entre visitas.

Principais recursos:

- layout responsivo para desktop e dispositivos móveis;
- temas claro e escuro com preferência salva em `localStorage`;
- navegação por seções com URL compartilhável;
- formulário de contato integrado ao WhatsApp;
- menu lateral expansível com navegação acessível;
- respeito à configuração `prefers-reduced-motion`;
- projetos independentes organizados em uma única estrutura;
- publicação estática pelo GitHub Pages.

## Tecnologias

| Área | Tecnologias |
| --- | --- |
| Estrutura | HTML5 semântico |
| Interface | CSS3, Flexbox, Grid e Custom Properties |
| Comportamento | JavaScript ES6+ e Web APIs |
| Persistência | LocalStorage |
| Aplicação instalável | Web App Manifest, Service Worker e Cache API |
| Qualidade | Node.js para validação automática de sintaxe |
| Publicação | GitHub Pages |

O site não utiliza frameworks, dependências de produção ou processo de build. O Node.js é uma ferramenta opcional de desenvolvimento e não é necessário para acessar o portfólio.

## Projetos apresentados

### Nexus Finance Dashboard

Dashboard de finanças pessoais com gráficos dinâmicos, controle de receitas e despesas, orçamentos, metas e persistência local.

`HTML` `CSS` `JavaScript` `Chart.js` `LocalStorage`

### NexusWeather

Interface de previsão do tempo que consulta uma API externa e apresenta temperatura, umidade, vento e condições climáticas.

`JavaScript` `Fetch API` `REST` `JSON`

### Nexus Setup

Landing page de e-commerce com catálogo, filtros por categoria, carrinho de compras e finalização do pedido pelo WhatsApp.

`HTML` `CSS` `JavaScript` `Web API`

### Futevôlei Performance

PWA mobile-first voltada a rotinas de treino, matchmaking e scouting, com manifesto próprio e funcionamento offline por Service Worker.

`PWA` `Service Worker` `Cache API` `JavaScript`

## Estrutura do repositório

```text
.
|-- assets/
|   `-- images/
|       |-- favicon.svg
|       `-- perfil.jpg
|-- projects/
|   |-- clima/
|   |-- dashboard-financeiro/
|   |-- futevolei/
|   `-- loja-nexus/
|-- scripts/
|   `-- validate-js.js
|-- .gitignore
|-- .nojekyll
|-- index.html
|-- package.json
`-- README.md
```

Cada diretório em `projects/` contém uma demonstração independente e pode ser aberto por meio da seção de projetos do portfólio.

## Executar localmente

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/BanchiLian/Portif-lio.git
cd Portif-lio
```

Como o projeto é estático, não há pacotes obrigatórios para instalar. Para recursos que exigem HTTP, como o Service Worker, utilize um servidor local:

```bash
npx serve .
```

Também é possível utilizar a extensão Live Server do VS Code.

## Validação com Node.js

O repositório inclui uma verificação automática feita apenas com módulos nativos do Node.js. Ela percorre o projeto, analisa arquivos `.js` e também os blocos `<script>` embutidos nos arquivos HTML.

```bash
npm run validate
```

A validação retorna erro caso encontre JavaScript com sintaxe inválida. Nenhuma dependência precisa ser instalada para executar esse comando.

## Publicação

O portfólio é publicado pelo GitHub Pages a partir da branch `main`. O arquivo `.nojekyll` garante que a estrutura estática seja servida sem processamento adicional do Jekyll.

## Próximas melhorias

- substituir as imagens temporárias da seção “Sobre” por fotos próprias;
- disponibilizar o currículo em PDF;
- criar estudos de caso detalhados dos principais projetos;
- adicionar uma versão do conteúdo em inglês;
- incluir testes automatizados de acessibilidade.

## Autor

Desenvolvido por **Elian Mori**.

- [GitHub](https://github.com/BanchiLian)
- [LinkedIn](https://linkedin.com/in/elianmori)
