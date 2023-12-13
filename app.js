/****************************************************************************************************************************************************
* Objetivo: Cria uma API para respoder dados de uma pizzaria
* Data: 24/11/2023
* Autor: Ryan Alves
* Versão: 1.0
****************************************************************************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const funcoes = require('./model/funcoes.js')

const app = express()


app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Credentials', true)
    response.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT')
    response.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
    next()

})  


// EndPoints: Listar o nome, id, email e senha de todos os usuários
app.get('/usuarios/', cors(), async (request, response, next) => {
    response.status(200)
    response.json(funcoes.getListaUsuarios())
    
    
})

// // EndPoints: Listar os dados de um usuário
// app.get('/usuario/:id', cors(), async (request, response, next) => {

//     let id = request.params.id

//     if(funcoes.getInfoUsuario(id)){
//         response.json(funcoes.getInfoUsuario(id))
//         response.status(200)
//     }else{
//         response.json({erro: 'Não foi possível encontrar um item'})
//         response.status(404)
//     }
    
// })

// // EndPoints: Listar o nome e imagem das categorias
// app.get('/categorias/', cors(), async (request, response, next) => {

//     response.json(funcoes.getListaCategorias())
//     response.status(200)
    
// })

// // EndPoints: Listar o nome, imagem e preço das pizzas
// app.get('/pizzas/', cors(), async (request, response, next) => {

//     response.json(funcoes.getListaPizzas())
//     response.status(200)
    
// })

// app.get('/pizzas/favoritas', cors(), async (request, response, next) => {

//     response.json(funcoes.getListaPizzasFavoritas())
//     response.status(200)
    
// })

// // EndPoints: Listar as informações de uma pizza
// app.get('/pizza/:id', cors(), async (request, response, next) => {

//     let id = request.params.id

//     if(funcoes.getInfoPizza(id)){
//         response.json(funcoes.getInfoPizza(id))
//         response.status(200)
//     }else{
//         response.json({erro: 'Não foi possível encontrar um item'})
//         response.status(404)
//     }
    
// })

// // EndPoints: Listar os comentários de uma pizza
// app.get('/comentarios/:id', cors(), async (request, response, next) => {

//     let id = request.params.id

//     if(funcoes.getComentarios(id)){
//         response.json(funcoes.getComentarios(id))
//         response.status(200)
//     }else{
//         response.json({erro: 'Não foi possível encontrar um item'})
//         response.status(404)
//     }
    
// })

// // EndPoints: Listar as informações de todas as bebidas
// app.get('/bebidas/', cors(), async (request, response, next) => {

//     let id = request.params.id

//     if(funcoes.getListaBebidas(id)){
//         response.json(funcoes.getListaBebidas(id))
//         response.status(200)
//     }else{
//         response.json({erro: 'Não foi possível encontrar um item'})
//         response.status(404)
//     }
    
// })

app.listen(8080, () => {})
