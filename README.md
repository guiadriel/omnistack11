# Semana Omnistack

Ferramentas necessárias do desenvolvimento

- NodeJS
- Chocolatey
- VisualStudioCode [ MaterialIcons Plugin, Dracula Color ]

Rota / Recurso

Tipos de parâmetros

- Query params: Parametros nomeados após ? Ex: (page=1&&filter=test)
    - função no express ⇒ request.query
- Route params: Parametors utilizados para identificar recursos
    - função no express ⇒ request.params
- Request Body: Corpo da requisição, usasdo pra criar ou alterar recursos
    - função no express ⇒ request.body

## Banco de dados

SQL: MySQL, SQLite, PostgreSQL,, Oracle, Microsoft SQL Server

NoSQL: MongoDB, CouchDB, etc

### Instalar banco  de dados

- KnexJS

### Entidades

- Ong
- Caso (incident)

### Funcionalidades

- **Login de ONG**
- Logout
- Cadastro de ONG
- Cadastrar novos casos
- **Listar casos específicos de uma ONG**
- Deletar casos
- Listar todos os casos
- Entrar em contato com a ONG

### Cabeçalho

request.headers ⇒ Localização, Usuário, enfim