# REST vs GraphQL: Comparando APIs com NestJS

Este repositório demonstra a diferença entre APIs **REST** e **GraphQL** consumindo a API de clima do OpenWeather. Ambas as abordagens foram implementadas usando **NestJS**.

---

## ⚠️ Diferenças entre REST e GraphQL

| Característica     | REST | GraphQL |
|----------------|------|---------|
| Estrutura da API | Múltiplos endpoints (ex.: `/weather/:city`) | Um único endpoint (`/graphql`) |
| Consulta de dados | Retorna um formato predefinido | O cliente define os dados que quer |
| Eficiência | Pode trazer mais dados do que o necessário | Reduz o excesso de dados na resposta |
| Suporte a Cache | Natural via HTTP | Cache mais complexo |
| Facilidade de uso | Simples e bem difundido | Pode ser mais complexo de aprender |

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório
```sh
git clone https://github.com/Fsp30/GrapHQL-x-REST-API-s-
cd Graphql-Rest
```

### 2. Instale as dependências
```sh
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
```env
API_KEY=SUA_CHAVE_AQUI
```

### 4. Rodando as APIs

#### 🌐 API REST
```sh
cd rest-api
npm run start:dev
```
Acesse no navegador:
```
http://localhost:3000/weather/Sao Paulo
```

#### 🌟 API GraphQL
```sh
cd graphql-api
npm run start:dev
```
Acesse o **GraphQL Playground**:
```
http://localhost:3000/graphql
```
Exemplo de query:
```graphql
query {
  getCityTemperature(city: "Sao Paulo") {
    city
    temperature
  }
}
```

---

## 🏆 Conclusão
- **REST** é ideal para aplicações simples e bem estruturadas.
- **GraphQL** é útil para consultas dinâmicas e otimização de dados.
- Ambas as abordagens têm prós e contras, e a escolha depende do projeto!

Se gostou do projeto, deixe uma ⭐ no repositório! 💪

