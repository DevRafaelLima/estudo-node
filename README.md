# Curso de node

## O que é o node? 
Basicamente o node é um interpretador de <b>JavaScript</b> no back-end.

## Módulos
O conceito de módulos é muito importante no node. Isso porque é a forma que o node tem de deixar o código mais limpo e organizado. 

A sintaxe de modulos é simples. Primeiro deve-se criar uma função oculta. no exemplo a baixo é uma função que soma dois elementos.

const soma = function(a,b ){ 
    return a + b
}

Segundo deve-se exporta essa função. No node fazemos isso da seguinte forma:

module.exports = soma

Agora que temos nossa função sendo exportada, para utilizá-la temos que importá-la. Para fazer isso utilizamos o seguinte comando:

const somaFunction = require("soma")

aqui temos algumas anotação para serem feitas. O "require" é responável em requerer os módulos no node. E o que está entre aspas, que no exemplo é "soma" é o caminho do arquivo.

## Protocolo HTTP

O protocolo HTTP basicamente é o protocolo usado entre o cliente e o servidor na internet. No node o "http" é o módulo original nativo do node para trabalhar com o protocolo http, no entanto é muito limitado. 

Para usar o módulo http no node devemos fazer o seguinte:

let http = require("http")

 obs: como o http é natural do node, então não precisamos indicar o caminho do arquivo. "require("http")" permite criar aplicação back-end. 

 Para criarmos um servidor diretamente no node devemos fazer o seguinte:

 http.createServer(function(req, res){
     res.end("hello word")
 }).listen(8080)

 explicando o comando acima:

 o http.createServer => cria um servidor e o listen configura a porta que ficar escutando as requisições do navegador. o createServer recebe uma função de callback. 

 ## express

 Como já mecionei, o módulo http é muito limitado. Então para criar servidores http usamos o express. 

 ### O que é express?

 O express é um miniframework para facilitar a criação de servidores http. 

 Para usarmos o express temos que instalá-lo primeiro. Para fazer isso fazemos o seguinte:

 npm install express --save

 ### Criar rotas

 Para criar rotas com o express é muito simples. Mas primeiro temos que carregar o módulo express usando as linhas de comando: 

 const express = require("express")
 const app = express()

 Criamos o servior http com o express:
 app.listen(8080, function(){
     console.log("servidor")
 })

 app recebe todas as funções do express. O <b>listen</b> configura o servidor, primeiramente temos que configurar a porta e depois uma função de callback. 

 A função listen deve ser a última linha. 
 A função listen recebe uma função de callback.

 Agora que temos nosso servidor configurado, vamos trabalhar criando as rotas.


 
 app.get('/', function(req, res){
     res.send("texto")
 })
#### receber parametros

app.get('/teste/:parametro'), function(req, res){
    res.send(req.params)
}

### nodemon

Até esse momento, sempre que fizermos alteração no servidor, temos que reiniciá-lo. O nodemon vem para automatiza o processo.

Para instalar o nodemon:

    npm install nodemon -g

### Como rederinzar arquivos html no node?

usamos o sendFile:

app.get('rota', funtion(req, res){
    res.sendFile(<caminho>)
})

### Sequelize

O sequelize é um módulo do node que ajuda trabalhar com banco de dados relacionais diretamente no nodeJS. 

Para instalar o sequilize fazermos o seguinte:
npm i sequelize
npm i mysql2

No curso temos que instalar o mysql também. 

#### Conectando ao banco de dados

Para conectar ao banco de dados com o sequileze temos que primeiro criar uma constante que vai receber todos os módulos do sequelize. Depois crianmos uma outra constante que cria uma nova instancia da variável que recebe os módulos do sequelize e passamos as informações de conexão, que são: nome do banco, user, password, obj. esse objeto tem o host e dialect. O host indica o host que será conectado e dialect informa o tipo de banco de dados. Abaixo segue um exemplo de conexão:

const Sequelize = require('sequelize')
const sequelize = new Sequelize('<nomebanco>','<user>','<pass>',{host:'<host>', dialect: 'mysql'})

##### Criando uma tabela diretamente com o Sequelize
Depois de ter a conexão com o banco de dados em mãos, vamos aprender a criar tabelas com o Sequelize. 
1º deve-se criar uma constante que vai receber as configurações da tabela;
2º sincronizar o sequelize com o bando de dados;

const <name> = sequelize.define(<Nome tabela>, {
    campo: {type: Sequelize.STRING},
    idade: {type: sequelize.INTEGER}
})

<name>.sync({force:true}) // é recomendável comentar ou apagar essa linha após criar a tabela, se não quando executar o código novamente será criado outra vez a tabela.

##### Inserindo dados com o Sequelize
Para inserir dados como sequelize no node também é muito simple, segue um exemplo inserindo dados na tabela que foi criado acima.

<name>.create(
    {campo: "conteudo do campoe"},
    {idade: 99}
)

# Aplicação de postagens
Dentro do curso  instrutor cria uma aplicação de postagem. Essa aplicação tá dento da pasta appPostagens. 


