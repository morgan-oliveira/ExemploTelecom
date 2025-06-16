# ExemploTelecom: Sistema CRM para ISP.

Este é um sistema de gerenciamento de clientes, desenvolvido para o contexto de um provedor de internet.
Nele, você conta com:
- Sistema de cadastro de protocolos;
- Abertura de chamados para outros setores da ISP (NOC, suporte N2, equipe de redes interna, etc);
- Informações de rede dos clientes (útil para o suporte remoto, mostra informações como chassi, placa, OLT, CTO, e também plano do cliente).

O sistema utiliza React básico no front-end e Node.js no back-end, com banco de dados PostgreSQL e conteinerizado em Docker.

# Instruções para teste:

Após clonar o repositório, instale as dependências:

```npm install```

Para iniciar o front-end, abra um terminal na raíz do projeto e digite o seguinte comando:

```npm run dev```

Para iniciar o back-end, mova para a pasta `server` :

```cd server```

Após isso, basta inicializar o servidor:

```npx tsx server.ts```

Na versão atual, para inserir dados no postgres, basta utilizar Postman ou Imsonia e fazer as requisições.

Estou desenvolvendo esse sistema buscando demonstrar meus conhecimentos e embarcar na área de desenvolvimento de sistemas.

