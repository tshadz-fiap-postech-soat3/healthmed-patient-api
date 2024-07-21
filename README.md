## Descrição

Hackathon - Software Architecture

Acesse a [Wiki do Projeto](https://github.com/tshadz-fiap-postech-soat3/healthmed/wiki) para mais informações a respeito dos:

* Requisitos técnicos (business)
* Domain-Driven Design
* S-SDLC
* Arquitetura
* Vídeo explicativo

<p align="center">
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#running">Como rodar a aplicação</a> &#xa0; | &#xa0;
  <a href="#docker-compose">Docker Compose</a> &#xa0; | &#xa0;
</p>

<h2 id="tecnologias"> Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

* Typescript
* Node.js
* REST Api
* MySQL
* Swagger
* Nest Js

<h2 id="running"> Como rodar a aplicação </h2>

```bash
# Clone este repositório
$ git clone <https://github.com/tshadz-fiap-postech-soat3/healthmed-patient-api.git>

# Acesse a pasta do projeto no terminal
$ cd ./healthmed-patient-api

# Crie um arquivo `.env` na pasta raíz do projeto com as suas informações:

MYSQL_HOST = "host"
MYSQL_ROOT_PASSWORD = "root"
MYSQL_ROOT_USER = "root"
MYSQL_DATABASE = "database"
MYSQL_USER = "user"
MYSQL_PASSWORD = "password"
MYSQL_PORT = 3306
```
<h3 id="docker-compose"> Docker-compose </h3>

```bash
# Iniciar o projeto
$ docker compose up -d --build

# Acesse o container
$ docker exec -it healthmed sh

# Dentro do container rode as migrations
$ npx prisma migrate dev --name init && npx ts-node prisma/seed.ts

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```

## Swagger

### Após rodar o projeto, acesse http://localhost:8080/swagger
