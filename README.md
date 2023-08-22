# Teste técnico

Este repositório contém o projeto desenvolvido como parte do processo seletivo para a empresa BRQ Digital Solutions. Aqui, você verá algumas das minhas habilidades em desenvolvimento de aplicativos móveis, utilizando como base o React Native e JavaScript.

## Descrição do Projeto

O objetivo deste projeto é apresentar uma aplicação simples com basicamente 3 telas:

1. **Login:** Esta tela simula o processo de login, buscando dados mockados para autenticação.

2. **Home:** A tela de início realiza um GET para a API https://api.themoviedb.org/3/movie/popular para exibir uma lista de filmes.

3. **Detalhes do Filme:** A tela de detalhes do filme faz um GET para a API https://api.themoviedb.org/3/movie/{movie_id}, usando o ID do filme obtido anteriormente, para fornecer informações mais detalhadas.

Observação Importante: Todas as requisições feitas à API devem ser autenticadas. O token de autenticação está armazenado em um arquivo não versionado chamado .env e é acessado por meio da biblioteca `react-native-dotenv`. Certifique-se de gerar e configurar corretamente o token bearer fornecido para garantir o acesso adequado aos recursos da API.

## Principais Bibliotecas Utilizadas

Algumas das principais libs utilizadas no projeto:

- **React Native:**

- **TypeScript:**

- **Redux:**

- **Redux Saga:**

- **react-native-splash-screen:**

- **Jest:**

- **Babel:**

## Possíveis Melhorias

Há diversas melhorias que podem ser implementadas para aprimorar este projeto, seguem algumas:

- **Sistema de Favoritos:** É possível criar um sistema de favoritos, utilizando o endpoint https://api.themoviedb.org/3/account/{account_id}/favorite para permitir que os usuários marquem seus filmes favoritos.

- **Sistema de Login Real:** Atualmente, o projeto utiliza dados mockados para simular o processo de login. Implementar um sistema de login real, possivelmente integrado com uma API de autenticação.

## Como Iniciar

Para executar este projeto localmente, siga estas etapas:

1. Certifique-se de ter o ambiente React Native configurado em sua máquina.

2. Clone este repositório e navegue até o diretório do projeto.

3. Execute `npm install` para instalar as dependências do projeto.

4. Utilize `npm start` para iniciar o aplicativo.

Fique à vontade para explorar o código e os componentes, e não hesite em fornecer feedback ou sugestões de melhorias.

---

**Andre Matos**  
andre_matos13@hotmail.com  
[https://andrematos.dev.br](https://andrematos.dev.br)
