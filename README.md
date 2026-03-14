# 📦 Knex Corporate Sales API

API desenvolvida para gerenciamento de **produtos e compras corporativas**, permitindo cadastro de usuários, autenticação, gerenciamento de produtos e registro de compras.

Este projeto foi desenvolvido como **case técnico para a empresa Knex**.

---

# 🔗 Repositório

https://github.com/Pedro-Antonio-Dev/knex-corporate-sales-api

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- Postman (para testes da API)

---

# 📂 Estrutura do Projeto

```
knex-corporate-sales-api
│
├── database
│   └── schema.sql
│
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── repositories
│   ├── routes
│   │   ├── authRoute.js
│   │   ├── productRoute.js
│   │   ├── transactionRoute.js
│   │   └── router.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── server.js
```

---

# ⚙️ Como Rodar o Projeto

## 1️⃣ Clonar o repositório

```terminal
git clone https://github.com/Pedro-Antonio-Dev/knex-corporate-sales-api
```

---

## 2️⃣ Entrar na pasta do projeto

```terminal
cd knex-corporate-sales-api
```

---

## 3️⃣ Instalar as dependências

```terminal
npm install
```

---

## 4️⃣ Criar o arquivo .env

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PORT=3000
JWT_SECRET=seu_secret
```

---

# 🗄️ Configuração do Banco de Dados

O projeto utiliza **PostgreSQL**.

## 1️⃣ Criar o banco de dados

Execute o comando abaixo no PostgreSQL:

```sql
CREATE DATABASE corporate_sales;
```

---

## 2️⃣ Executar o schema do projeto

Após criar o banco, execute o arquivo `schema.sql` presente na pasta:

```
database/schema.sql
```

Exemplo usando terminal:

```terminal
psql -U postgres -d corporate_sales -f database/schema.sql
```

Ou utilizando o **pgAdmin4**:

1. Abra o banco `corporate_sales`
2. Abra o **Query Tool**
3. Cole o conteúdo do arquivo `schema.sql`
4. Execute o script

---

## 3️⃣ Iniciar o servidor

```terminal
npm run dev
```

A API irá iniciar em:

```
http://localhost:3000
```

---

# 🔐 Autenticação

A API utiliza **JWT para autenticação**.

Após realizar login, a API retornará um **token JWT**.

Esse token deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN
```

---

# 📬 Documentação da API

A API possui rotas para **autenticação de usuários, gerenciamento de produtos e registro de compras**.

Todas as rotas (exceto login e registro) requerem **autenticação via JWT**.

---

# 👤 Auth

## Registrar Usuário

**POST**

```
/auth/register
```

Cria um novo usuário no sistema.

---

## Login

**POST**

```
/auth/login
```

Realiza login do usuário e retorna um **token JWT** para autenticação nas demais rotas.

---

# 📦 Produtos

## Listar Todos os Produtos

**GET**

```
/products
```

Retorna todos os produtos cadastrados.

Requer autenticação.

---

## Listar Produto Específico

**GET**

```
/products/:id
```

Retorna os dados de um produto específico.

Parâmetro:

```
id -> ID do produto
```

Requer autenticação.

---

## Criar Produto

**POST**

```
/products
```

Cria um novo produto vinculado à empresa do usuário autenticado.

Requer autenticação.

---

## Editar Produto

**PUT**

```
/products/:id
```

Edita as informações de um produto.

O sistema verifica se o **company_id do usuário autenticado** é o mesmo do produto.

Se forem iguais, a edição é permitida.

---

## Deletar Produto

**DELETE**

```
/products/:id
```

Remove um produto do sistema.

O sistema verifica se o **company_id do usuário autenticado** é o mesmo do produto.

Se forem iguais, a exclusão é permitida.

---

# 💳 Transações

## Comprar Produto

**POST**

```
/transaction/:id
```

Realiza a compra de um produto.

Parâmetro:

```
id -> ID do produto
```

Requer autenticação.

---

## Listar Compras do Usuário

**GET**

```
/transaction/purchases
```

Lista todas as compras realizadas pelo **usuário autenticado**.

Requer autenticação.

---

# 🧪 Testes da API

A API pode ser testada utilizando a **collection do Postman incluída no repositório**.

Passos para utilizar:

1. Abra o Postman
2. Importe a collection presente no projeto
3. Execute as requisições disponíveis
4. Utilize o token retornado no login para acessar as rotas protegidas

---

# 👨‍💻 Autor

Projeto desenvolvido por **Pedro Antonio** como parte de um **case técnico para a empresa Knex**.