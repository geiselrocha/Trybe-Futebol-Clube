
# Trybe Futebol Clube

O TFC é um site informativo sobre partidas e classificações em um determinado campeonato de futebol! ⚽

![tfc](https://user-images.githubusercontent.com/99822908/197893222-e9b8bf64-e6cb-415d-b273-ff045ff426cd.png)


## ⚙️ Executando o projeto

Clone o repositório, acesse a pasta e instale as dependências:

```
git clone git@github.com:geiselrocha/trybe-futebol-clube.git
cd trybe-futebol-clube
npm install
```

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2
 
➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`
    
➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/b883b81d-21f6-4b60-aa62-8508f6017ea0);
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário.
  
</details>

<details>
  <summary><strong>🐋 Rodando no Docker</strong></summary>
  
  <br/>
  
  > :information_source: Rode os serviços com o comando `docker-compose up -d --build`.
  
</details>

## 📋 Documentação da API

#### Login
```

  POST /login 
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Seu email. |
| `password` | `string` | **Obrigatório**. Sua senha. |

#### Validação de Login

```
  GET /login/validate
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. Token do login deve ser passado no header. |

#### Times

```
  GET /teams
```

```
  GET /teams/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Id do time deve ser passado pelo parâmetro da URL. |

#### Partidas

```
  GET /matches
```

```
  GET /matches?inProgress=true
```

```
  GET /matches?inProgress=false
```

```
  POST /matches
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `homeTeam` | `number` | **Obrigatório**. Id do time da casa. |
| `awayTeam` | `number` | **Obrigatório**. Id do time visitante. |
| `homeTeamGoals` | `number` | **Obrigatório**. Número de gols do time da casa. |
| `awayTeamGoals` | `number` | **Obrigatório**. Número de gols do time visitante. |
| `Authorization`      | `string` | **Obrigatório**. Token do login deve ser passado no header. |

```
  PATCH /matches/:id/finish
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Id da partida deve ser passada pelo parâmetro da URL. |

```
  PATCH /matches/:id/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Id da partida deve ser passada pelo parâmetro da URL. |
| `homeTeamGoals` | `number` | **Obrigatório**. Número de gols do time da casa. |
| `awayTeamGoals` | `number` | **Obrigatório**. Número de gols do time visitante. |

#### Tabela de Classificação

```
  GET /leaderboard/home
```

```
  GET /leaderboard/away
```

```
  GET /leaderboard
```

## 👨🏻‍💻 Habilidades
- Realização da dockerização dos apps, network, volume e compose;
- Modelagem de dados com MySQL através do Sequelize;
- Criação e associação de tabelas usando models do sequelize;
- Construção de uma API REST com endpoints para consumir os models criados;
- Construção de um CRUD com TypeScript, utilizando ORM;
- Validar dados das requisições com a biblioteca Joi.
