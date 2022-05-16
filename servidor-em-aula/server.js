const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json()) //faz o parseamento do body

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "Mensagem": "API lista de filmes:"
        }
    ])
})

app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do ID enviado no request
    let idRequest = request.params.id
                        //ARAY.find(elememnto => comparacao)
                        //encontre um filme dentro do filmes JSON
                        //que o id do filme seja igual o id do request
let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

response.status(200).send(filmeEncontrado)
})

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (fimesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "Filme cadastrado com sucesso",
        novoFilme
    })
})

app.listen (3059, ()=>{
    console.log("Servidor está rodando na porta 3059, baby!")
    })