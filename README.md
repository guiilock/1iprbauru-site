# 1ª Igreja Presbiteriana Renovada de Bauru

Site institucional da 1ª Igreja Presbiteriana Renovada de Bauru.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento para aplicações React
- **Framer Motion** - Biblioteca de animações
- **React Hook Form** - Gerenciamento de formulários
- **React Icons** - Biblioteca de ícones

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd 1iprbauru-site
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para testar o build localmente:

```bash
npm run preview
```

## 🎨 Paleta de Cores

- **Azul Escuro**: `#31435b` - Primária (textos, cabeçalhos)
- **Azul Médio**: `#5a85a8` - Secundária (destaques, botões)
- **Laranja**: `#e8994c` - Accent (CTAs, hover states)
- **Laranja Claro**: `#f4b371` - Accent secundário
- **Pêssego**: `#fdca93` - Backgrounds suaves
- **Creme**: `#ffecce` - Backgrounds claros

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── home/            # Componentes da página inicial
│   └── shared/          # Componentes reutilizáveis
├── pages/               # Páginas da aplicação
├── styles/              # Estilos globais
├── utils/               # Constantes e utilitários
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## 🔄 Atualizações Necessárias

### 1. Logotipo
- Adicione o logotipo da igreja em `/public/logo.png`

### 2. Vídeos do YouTube
- Edite `/src/components/home/LatestSermons.jsx`
- Substitua os IDs dos vídeos pelos IDs reais do canal @1iprbauru
- Para encontrar o ID: vá ao vídeo no YouTube, o ID está após `watch?v=` na URL

### 3. Informações da Liderança
- Edite `/src/pages/Leadership.jsx`
- Adicione fotos e informações do pastor e presbíteros

### 4. Imagens
- Adicione fotos do templo e atividades em `/public/images/`
- Atualize as referências nos componentes conforme necessário

## 🌐 Deploy

O site pode ser hospedado em:

### Vercel (Recomendado)
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. O deploy será automático

### Netlify
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` após o build
3. Configure o domínio personalizado

### GitHub Pages
1. Instale `gh-pages`: `npm install -D gh-pages`
2. Adicione ao `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## 📧 Contato

- **Email**: secretaria@1iprbauru.com.br
- **Telefone**: (11) 91420-8479
- **Instagram**: [@1iprbauru](https://www.instagram.com/1iprbauru)
- **YouTube**: [@1iprbauru](https://www.youtube.com/@1iprbauru)

## 📄 Licença

© 2026 1ª Igreja Presbiteriana Renovada de Bauru. Todos os direitos reservados.
# 1iprbauru-site
