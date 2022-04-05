# Projeto Vehicles Manager

Projeto desenvolvido em processo seletivo da VHG Soluções, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.

## Back-End

### Banco de dados criados e registros

- Banco de dados vhg_challenges
- Tabela para tipos de veículos registrando (Id, tipo)
- Tabela para categorias registrando (Id, categoria, id do tipo)
- Tabela para veículos registrando (id, id da categoria, marca, modelo, cor, placa, ano)

### Rotas criadas e funções

#### Produtos /products e /product

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

A pasta raiz possui o 'init.sql' que possui os comandos para criação do banco de dados e tabelas necessárias para a aplicação funcionar.


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

## FAQ

#### Posso ajudar a aprimorar o projeto?

Sim, toda ajuda para um sistema automático, genérico e seguro é bem-vinda.


## Melhorias pendentes

- Sistema de usuários com validação de token
- Melhora do Front-end e estilização
- Tipagem das categorias e tipos de veículos genérica para adição/alteração ou remoção sem alteração no código.


## Autores

### Gabriel

| [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabrielpbenedicto@gmail.com) | [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielbenedicto/) | [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/gabrielbenedicto) |
|--|-----|-----|