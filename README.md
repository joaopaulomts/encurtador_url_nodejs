# 🔗 URL Shortener - Encurtador de Links

Um encurtador de URL simples e eficiente construído com Node.js, Express e SQLite. Transforme URLs longas em links curtos e fáceis de compartilhar!


## ✨ Funcionalidades

- 🚀 Encurtamento rápido de URLs
- 📊 Contagem de cliques em cada link
- 💾 Armazenamento persistente usando SQLite
- 🎨 Interface limpa e responsiva
- 🔄 Redirecionamento automático para a URL original

## 🛠️ Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express.js
  - SQLite (banco de dados embutido)
  - shortid (geração de IDs curtos)

- **Frontend**:
  - EJS (templates)
  - CSS puro (sem frameworks)

## 🚀 Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/encurtador-url.git
   cd encurtador-url
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node index.js
   ```

4. Acesse no navegador:
   ```
   http://localhost:5000
   ```

## 🖱️ Como Usar

### 🔗 Criando um novo link encurtado
1. Acesse a página inicial em `http://localhost:5000`
2. No campo indicado, cole sua URL completa (incluindo `http://` ou `https://`)
   
   ```
   Exemplo: https://www.exemplo.com/uma-url-muito-longa/que-deseja-encurtar
   ```
4. Clique no botão **"Encurtar"**
5. Pronto! Seu link aparecerá na tabela abaixo:
   
   ```
   Formato: http://localhost:5000/abc123
   ```
