Claro! Aqui está o README completo com uma parte explicando o que é o projeto:

```markdown
# Projeto Hackathon Saúde 4.0

Este projeto foi desenvolvido para o Hackathon Saúde 4.0, focado em soluções inovadoras para o setor da saúde. Ele é composto por duas partes principais: um backend que lida com a lógica de negócios e um frontend que proporciona uma interface amigável ao usuário.

## O que é o Projeto?

O objetivo deste projeto é melhorar a gestão de dados de saúde utilizando tecnologia blockchain para garantir a integridade e a segurança das informações. O sistema oferece funcionalidades como registro de pacientes, agendamento de consultas e histórico médico, permitindo um acesso seguro e transparente aos dados de saúde.

### Tecnologias Utilizadas

- **Backend**: Node.js, Express, The Graph, IPFS
- **Frontend**: React, Redux
- **Blockchain**: Ethereum, The Graph, IPFS

### Sobre a Blockchain

Este projeto utiliza a tecnologia blockchain para garantir a integridade, segurança e transparência dos dados de saúde. O uso da blockchain permite que os dados sejam armazenados de forma descentralizada, evitando fraudes e garantindo que as informações sejam imutáveis e verificáveis.

## Funcionalidades

### Backend

- Registro de pacientes
- Agendamento de consultas
- Histórico médico

### Frontend

- Interface amigável para cadastro de pacientes
- Agendamento de consultas
- Visualização do histórico médico

## Instalação e Configuração

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Docker
- Node.js
- Yarn ou npm
- IPFS
- Graph Node
- Hardhat

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Inicialize o Docker:**

   ```bash
   docker-compose up -d
   ```

3. **Instale as dependências do Backend:**

   Navegue até a pasta do backend e instale as dependências:

   ```bash
   cd b*
   yarn install
   ```

4. **Instale as dependências do Frontend:**

   Navegue até a pasta do frontend e instale as dependências:

   ```bash
   cd f*
   yarn install
   ```

5. **Configuração do The Graph:**

   Execute os seguintes comandos para configurar o The Graph:

   ```bash
   docker-compose up
   graph codegen
   graph build
   graph create --node http://localhost:8020/ doc
   graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 doc
   ```

## Uso

Após a instalação e configuração, você pode iniciar o projeto da seguinte maneira:

1. **Inicie o backend:**

   Navegue até a pasta do backend e execute:

   ```bash
   yarn hardhat node --hostname 0.0.0.0
   ```

2. **Inicie o frontend:**

   Navegue até a pasta do frontend e execute:

   ```bash
   yarn dev
   ```

3. **Acesse a aplicação:**

   Abra seu navegador e vá para `http://localhost:3000` para acessar a interface do usuário.

## Testes

### Backend

Para rodar os testes do backend, use:

```bash
cd backend
yarn test
```

### Frontend

Para rodar os testes do frontend, use:

```bash
cd frontend
yarn test
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

## Contato

Para mais informações, entre em contato com [seu nome] em [seu email].
```

Essa versão do README inclui uma explicação inicial sobre o que é o projeto, fornecendo uma visão geral clara antes de detalhar as tecnologias, funcionalidades, instalação e uso.
