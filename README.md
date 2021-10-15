- Instalar o Postgres e o PSQL
  https://www.postgresql.org/download/

- Inicie o servidor local do Postgres com
  `psql -h 127.0.0.1 -U postgres`

- Se pedir senha, faça a seguinte gambs:
    - Execute o seguinte código no terminal
    `user:~$ sudo -i -u postgres`
    - Deve aparecer a linha
    `postgres@user:~$`
    - digite o comando `psql` para entrar no "terminal" do postgres
    - Execute esta linha:
    `postgres=# ALTER USER postgres PASSWORD 'mynewpassword';`
    (não esqueça de trocar 'mynewpassword' pela sua senha)
    - saia do terminal do postgres com o comando `exit` (2 vezes, se precisar)
    - Execute novamente `psql -h 127.0.0.1 -U postgres` e veja se entra no terminal do postgres de novo, com a senha.

- Criar a database com `CREATE DATABASE nome_do_bd;` no psql
    - `\l` para listar databases

- Instalar o dBeaver ou outro cliente de SQL

- Criar a conexão com o postgres via dbeaver (nova conexão, preencher com os dados do banco, etc)

- Se quiser testar criação de tabelas e tal
    - `\c nome_do_bd` no terminal do psql para entrar na database

- **EXEMPLO DE CRIAÇÃO DE TABELA USANDO SQL**
    CREATE TABLE products(
        id            SERIAL       PRIMARY KEY,
        name          CHAR(255)    NOT NULL,
        description   CHAR(255)    NULL,
        pic           CHAR(255)    NULL,
        price         DECIMAL(10,2) NOT NULL,
        created_at    TIMESTAMP    DEFAULT NOW(),
        updated_at    TIMESTAMP    DEFAULT NOW()
    );

  - `\d` no terminal do psql para ver as tabelas criadas ou vê no menu lateral do dBeaver
  
  - não esquecer de dar drop depois, pois o Sequelize vai criar as tabelas do banco com as migrações
    `DROP TABLE products`

- https://sequelize.org/master/manual/migrations.html pra usar o sequelize-cli e criar um novo modelo
  **EXEMPLO DE COMANDO PARA CRIAR UM MODELO BOOKS COM TITLE E PRICE. VOCÊS VÃO CRIAR OS MODELOS DE ACORDO COM O QUE PRECISA TER NA API DO BQ**
  `npx sequelize-cli model:generate --name Books --attributes title:string,price:decimal`

- Subir migração com 
  `npx sequelize-cli db:migrate`

- Testar pra ver se entrou a tabela no dBeaver (acessando pelo menu lateral)

- popular as tabelas do banco com **seed** 
  `npx sequelize-cli seed:generate --name demo-product`

- Olhar na documentação de migration como preencher o seed
  https://sequelize.org/master/manual/migrations.html#creating-the-first-seed

- Pode pegar os dados dos produtos direto da API do bq-heroku para fazer o seed de produtos.