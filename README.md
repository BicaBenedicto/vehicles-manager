# Projeto Vehicles Manager

Projeto de gerenciamento de veículos com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados. Podendo adicionar, remover, alterar veículos por uma interface no front-end.

## Funcionalidades

### Front-End

- Tela de inicial de login
- Listagem de veículos em grade
- Listagem de veículos em tabela
- Alteração de veículo por id
- Remoção de veículo por id
- Cadastro de veículo novo
- Botão de mudança entre listagem de veículos em grade ou tabela
- Pessoas deslogadas são redirecionadas a página de login
- Responsivo para mobile (Sem opção de listagem por tabela em mobile)

#### Rotas criadas e funções

- / - Página inicial de login
- /vehicles - Listagem de todos os veículos
- /vehicles/:id - Detalhes do veículo pelo id da URL
- /manager - Cadastro de novos veículos

### Back-End

#### Banco de dados criados e registros

- Banco de dados vhg_challenges
- Tabela para tipos de veículos registrando (Id, tipo)
- Tabela para categorias registrando (Id, categoria, id do tipo)
- Tabela para veículos registrando (id, id da categoria, marca, modelo, cor, placa, ano)

#### Rotas criadas e funções

##### Veículos /vehicles

- /veiculos - `GET` - Consulta todos os veículos
  ```json
  // Exemplo de retorno
  [
    {
      "id": 4,
      "color": "Preto",
      "model": "Sedan Teste 2",
      "plate": "CAS-1321",
      "year": 1960,
      "brand": "Marca qualquer",
      "category": "Sedan",
      "type": "carro"
    },
    {
      "id": 17,
      "color": "Azul",
      "model": "Compacto Teste 2",
      "plate": "HAS-3321",
      "year": 1990,
      "brand": "Marca qualquer",
      "category": "Sedan",
      "type": "carro"
    },
    ...
  ]
  ```
- /veiculos - `POST` - Cadastra um novo veículo
  ```json
  // Exemplo de retorno
  {
    "id": 4,
    "color": "Preto",
    "model": "Sedan Teste 2",
    "plate": "CAS-1321",
    "year": 1960,
    "brand": "Marca qualquer",
    "category": "Sedan",
    "type": "carro"
  }
  ```
- /veiculos/:id - `GET` - Consulta um veículo pelo seu id
  ```json
  // Exemplo de retorno
  {
    "id": 4,
    "color": "Preto",
    "model": "Sedan Teste 2",
    "plate": "CAS-1321",
    "year": 1960,
    "brand": "Marca qualquer",
    "category": "Sedan",
    "type": "carro"
  }
  ```
- /veiculos/:id - `PUT` - Altera um veículo pelo seu id
  ```json
  // Exemplo de retorno
  {
    "id": 4,
    "color": "Preto",
    "model": "Sedan Teste 2",
    "plate": "CAS-1321",
    "year": 1960,
    "brand": "Marca qualquer",
    "category": "Sedan",
    "type": "carro"
  }
  ```
- /veiculos/:id - `DELETE` - Remove um veículo pelo seu id

##### Categorias /categorias

- /categorias - `GET` - Consulta todas as categorias e tipos
```json
// Exemplo de retorno
  [
    {
      "id": 4,
      "category": "Sedan",
      "type": "carro"
    },
    {
      "id": 5,
      "category": "Cidade",
      "type": "moto"
    },
    ...
  ]
```


## Aprendizados

Utilizar o Typescript para criação de API no Backend utilizando a tipagem e classes para criação de controller, middleware e models.

## Stack utilizada

**Front-end:** React, React Router, Sass

**Back-end:** Node.js, Typescript, Express.js


## Instalação

Por possuir Front-End e Back-End, a instalação é feita individualmente em suas respectivas pastas


Acessar a pasta de front e usar o comando abaixo e após, acessar a de back e usar o mesmo comando.
```bash
  cd front
  npm install
  cd ../back
  npm install
  cd ..
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/BicaBenedicto/vehicles-manager.git
```

Entre no diretório do projeto

```bash
  cd vehicles-manager
```

**Instale as dependências conforme informado acima**

**Configurando servidor:**

Alguns arquivos necessitam configurações no back-end e front-end.

**Back-end**

Ao entrar na pasta do `backend`, crie um arquivo `.env` para as variáveis de ambiente

A pasta raiz possui o arquivo `init.sql` que possui os comandos para criação do banco de dados e tabelas necessárias para a aplicação funcionar.

**Variáveis de ambiente**

```bash
MYSQL_HOST=host do banco de dados
MYSQL_USER=usuário do banco de dados
MYSQL_PASSWORD=senha do banco de dados
MYSQL_DB=vhg_challenge
PORT=porta que o backend ira rodar
```

**Front-end**

Ao entrar na pasta do `frontend`, entre em `src` e depois em `services`, no arquivo `requisitionsApi.js`, é necessário colocar o valor da variável `BACKEND_URL`, como o URL do backend, padrão está como `http://localhost:4000`

**Inicie o servidor**

Para inicializar o front-end

```bash
  cd front
  npm run start
```

Para inicializar o back-end

```bash
  cd back
  npm run start
```

Pronto! Sua aplicação está rodando, lembre-se que é preciso do front-end e back-end rodando simultaneamente para não ocorrer problemas.

## FAQ

#### Posso ajudar a aprimorar o projeto?

Sim, toda ajuda para um sistema automático, genérico e seguro é bem-vinda.


## Melhorias pendentes

- Sistema de usuários com validação de token
- Sistema de usuários com validação no banco de dados e cadastro
- Cadastro de novos usuários feitos através de usuário com permissão privilegiada
- Página em front-end para o cadastro de novos usuários
- Rota em back-end para o cadastro, alteração e remoção de categorias e tipos de veículos
- Página em front-end para o cadastro, alteração e remoção de categorias e tipos de veículos
- Filtro de busca em listagem de veículos por Placa, Marca, Categoria, Tipo, Cor, Modelo, Ano de fabricação
- Melhora do Front-end e estilização
- Tipagem das categorias e tipos de veículos genérica para adição/alteração ou remoção sem alteração no código.
- Página em front-end de "Not found", caso a página não exista ou o veículo buscado pelo id não exista.


## Autores

### Gabriel

| [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabrielpbenedicto@gmail.com) | [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielbenedicto/) | [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/gabrielbenedicto) |
|--|-----|-----|
