# api para o app de mensagens

## Bibliotecas Utilizadas

- **Express**: Framework para Node.js que facilita a criação de aplicações web e APIs robustas.
- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing) em aplicações Express.
- **Dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.
- **Pg**: Cliente PostgreSQL para Node.js, utilizado para interagir com o banco de dados PostgreSQL.
- **Node-pg-migrate**: Ferramenta de migração para PostgreSQL, utilizada para gerenciar e versionar o esquema do banco de dados.

## Ferramentas de Desenvolvimento

- **Eslint**: Ferramenta de linting para JavaScript, utilizada para garantir a qualidade do código.
- **Prettier**: Formatador de código, utilizado para manter um estilo de código consistente.
- **Husky**: Ferramenta para criar hooks de Git, utilizada para automatizar tarefas antes de commits.
- **Commitlint**: Ferramenta para validar mensagens de commit, garantindo que sigam um padrão específico.
- **Commitizen**: Ferramenta para facilitar a criação de mensagens de commit seguindo um padrão específico.
- **Concurrently**: Executa múltiplos comandos simultaneamente, útil para rodar scripts de desenvolvimento em paralelo.

## Rotas

### Usuários

- `GET /users`: Retorna todos os usuários.
- `GET /user/phone/:phone`: Retorna um usuário específico com base no número de telefone. Valida os parâmetros antes de buscar o usuário.
- `GET /user/:id`: Retorna um usuário específico com base no ID. Valida os parâmetros antes de buscar o usuário.
- `POST /user`: Cria um novo usuário. Valida o corpo da requisição antes de criar o usuário.
- `PUT /user/:id`: Atualiza um usuário existente com base no ID. Valida se o usuário existe e o corpo da requisição antes de atualizar.
- `DELETE /user/:id`: Deleta um usuário existente com base no ID. Valida se o usuário existe antes de deletar.

### Chats

- `GET /chat/:id`: Retorna um chat específico com base no ID. Valida os parâmetros antes de buscar o chat.
- `GET /chats`: Retorna todos os chats.
- `POST /chat`: Cria um novo chat. Valida o corpo da requisição antes de criar o chat.
- `PUT /chat/:id`: Atualiza um chat existente com base no ID. Valida o chat atualizado antes de atualizar.
- `DELETE /chat/:id`: Deleta um chat existente com base no ID. Valida os parâmetros antes de deletar o chat.
