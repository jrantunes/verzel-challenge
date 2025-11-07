# VERZELMOVIES

Aplicação fullstack para listagem, busca e favoritos de filmes utilizando a API do TMDB.

Tecnologias:

**Frontend**: React + Vite + TypeScript
**Backend**: Node.js + Express + TypeScript
**Banco de Dados**: PostgreSQL (via Docker)
**Gerenciamento de Estado**: Recoil
**Deploy local com Docker + Docker Compose**

---

### 📌 Pré-requisitos

Antes de iniciar, instale:
- Docker e Docker Compose
- (Opcional) Node.js 18+ caso queira rodar localmente sem Docker

---

### 🚀 Configuração de Ambiente

📍 Antes de rodar a aplicação (com ou sem Docker) você precisa criar os arquivos de variáveis de ambiente .env.

#### 1️⃣ Criar .env na raiz do projeto

Copie o conteúdo do .env.example da raiz:

```bash
cp .env.example .env
```

#### 2️⃣ Criar .env no backend

```bash
cp backend/.env.example backend/.env
```

#### 3️⃣ Criar .env no frontend

```bash
cp frontend/.env.example frontend/.env
```

---

### 🐳 Rodando com Docker Compose (recomendado ✅)

Esta opção inicia todos os serviços juntos:

- **Frontend**
- **Backend**
- **PostgreSQL**

```bash
docker compose up --build
```

#### Após inicialização:
Serviço	URL
**Frontend**	[http://localhost:${FRONTEND_PORT}](http://localhost:${FRONTEND_PORT})
**API Backend**	[http://localhost:${API_PORT}/api](http://localhost:${API_PORT}/api)
**PostgreSQL**	interno via **db:5432**

#### Para parar:

```bash
docker compose down
```

---

### 🧩 Executar os serviços individualmente

Essa opção é útil durante o desenvolvimento.

#### 📍 Banco de Dados via Docker

```bash
docker compose up -d db
```

#### 🔹 Backend local (Node.js + Docker DB)

```bash
cd backend
docker build -t movies-backend .
docker run --env-file .env -p 8080:8080 movies-backend
```


A API ficará disponível em:

➡️ [http://localhost:8080/api](http://localhost:8080/api)

#### 🔹 Frontend local (Vite + Docker API)

```bash
cd frontend
docker build -t movies-frontend .
docker run --env-file .env -p 3000:80 movies-frontend
```

A aplicação ficará disponível em:

➡️ [http://localhost:3000](http://localhost:3000)