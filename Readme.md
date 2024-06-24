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
- Cadastro de médicos
- Cadastro de pacientes
- Histórico médico
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
   git clone https://github.com/bl4cks1d3/DocPronto.git
   cd DocPronto
   ```

2. **Inicialize o Docker:**

   Navegue até a pasta do backend e inicialize o docker:

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


## A ferramenta
![Imagem do WhatsApp de 2024-06-24 à(s) 04 03 51_b767cb31](https://github.com/bl4cks1d3/DocPronto/assets/49175546/40bb59ca-15f9-42c2-bf10-d2fa982b13b1)
![Imagem do WhatsApp de 2024-06-24 à(s) 04 04 18_7f90f223](https://github.com/bl4cks1d3/DocPronto/assets/49175546/aa85f9e8-7fe6-4fab-9c44-098881fc77a5)
![Imagem do WhatsApp de 2024-06-24 à(s) 04 10 29_506e2b2a](https://github.com/bl4cks1d3/DocPronto/assets/49175546/735bf9b7-2181-4e55-9592-4c0620ca4f83)
![Imagem do WhatsApp de 2024-06-24 à(s) 04 14 42_56d353c2](https://github.com/bl4cks1d3/DocPronto/assets/49175546/2f6be32e-4538-42d4-af1a-fc01934753f0)



## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

## Sobre
### Equipe Blackout
#### Angel Jackson Santos - Designer (https://www.linkedin.com/in/angel-jackson-2a663776/)
#### Jaqueline de Sousa Queroz - Front-End e Negócios (https://www.linkedin.com/in/jaquelinequeroz/)
#### Wesley Cardoso da Silva - FullStack e Negócios (https://www.linkedin.com/in/bl4cksidesystem/)

Este projeto foi desenvolvido para o hackathon Saúde 4.0. Dúvidas, entre em contato com a equipe para saber mais. 
```

