# FastFood-Back

Este é o back-end do FastFood, uma API desenvolvida em Node, TypeScript, Prisma e PostgreSQL, que fornece funcionalidades para auxiliar o FastFood-Front. 

Deploy no Render: https://fastfood-nvrr.onrender.com

O sistema possui as seguintes entidades principais:
+ `Products` - Responsável pelos produtos.
+ `Orders` - Armazena os pedidos dos usuários.
+ `Additionals` - Guarda todos os adicionais que alguns produtos podem ter.
+ `Payments` - Armazena o pagamento de um pedido, com os status: "PENDING" ou "PAID".
+ `Kitchen` - (futuro) Envia o pedido à cozinha, com os status: "PREPARING" ou "READY".

## Como executar localmente:

1. Clone o repositório.
2. Instale as dependências com o comando:
```bash
npm i
```
3. Preencha o arquivo `.env.development` com base no `.env.example`.
4. Inicie o Prisma com o comando `npm run dev:migration:generate`.
5. Execute o back-end e o front-end em modo de desenvolvimento com o comando:
```bash
npm run dev
```
