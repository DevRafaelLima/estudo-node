const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define(
    'postagem', {
        titulo: {type: Sequelize.STRING},
        conteudo: {type: Sequelize.TEXT}
    }
)
// inserir dados
// Postagem.create(
//     {titulo: "Brasil conquista o hexa na Russia"},
//     {conteudo: "Com esse título é possível considerar o Neymar o jogador do século do Brasil?"})

const usuario = sequelize.define('usuarios',{
    nome: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    idade: {type: Sequelize.INTEGER}
})

usuario.create(
    {nome: "Rafael Santos de Lima"},
    {email: "rafaelslima4@gmail.com"},
    {idade: 24}
)
//verifica se a conexão ocorreu corretamente
// sequilize.authenticate().then(function(){
//     console.log("Conexão success")
// }).catch(function(e){
//     console.log("erro: "+e)
// })