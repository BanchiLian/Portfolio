# Portfólio | Elian Mori

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puros para apresentar projetos, habilidades e trajetória profissional.

**Acesse:** [banchilian.github.io/Portif-lio](https://banchilian.github.io/Portif-lio/)

## Tecnologias

- HTML5 semântico
- CSS3, Flexbox, Grid e Custom Properties
- JavaScript ES6+
- LocalStorage para preferência de tema
- PWA e Service Worker no projeto Futevôlei Performance

Não há dependências, etapa de build ou pacotes para instalar.

## Estrutura

```text
.
├── assets/
│   └── images/
│       └── perfil.jpg
├── projects/
│   ├── clima/
│   │   └── index.html
│   ├── dashboard-financeiro/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── futevolei/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── sw.js
│   │   └── treino-pessoal.html
│   └── loja-nexus/
│       └── index.html
├── .gitignore
├── index.html
└── README.md
```

## Projetos

### Nexus Finance Dashboard

Controle financeiro pessoal com gráficos, orçamentos, metas e persistência local.

### NexusWeather

Interface de previsão do tempo que consulta uma API externa e apresenta temperatura, umidade e vento.

### Nexus Setup

Landing page de e-commerce com catálogo, filtros, carrinho e finalização via WhatsApp.

### Futevôlei Performance

PWA mobile-first para rotinas de treino, matchmaking e scouting, com suporte offline por Service Worker.

## Executar localmente

Use um servidor HTTP local para que recursos como o Service Worker funcionem corretamente:

```bash
npx serve .
```

Também é possível usar a extensão Live Server do VS Code. Depois, abra o endereço exibido no terminal.

## Publicação no GitHub Pages

Nas configurações do repositório, acesse **Pages**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.

## Observações

- O formulário de contato direciona a mensagem preenchida para o WhatsApp.
- O currículo em PDF ainda precisa ser adicionado antes de habilitar o download.
- As fotos secundárias da seção “Sobre” usam imagens externas temporárias e podem ser substituídas por fotos pessoais em `assets/images/`.

---

Desenvolvido por Elian Mori.
