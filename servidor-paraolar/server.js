const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")

const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json()) 

app.get("/Netmandy", (request, response)=>{
    response.status(200).json([
        {
            "Mensagem": "Seja bem vindo à maior plataforma de séries e filmes do Brasil.Tudo certo!"
        }
    ])
})

app.get("/filmes/buscar/:id", (request, response)=>{
    
    let idRequest = request.params.id
                       
let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

response.status(200).send(filmeEncontrado)
})

app.get("/filmes", (request, response)=> {
    response.status(200).send(filmesJson)
})

app.get("/series", (request, response)=> {
    response.status(200).send(seriesJson)
})

app.get("/series/buscar/:id", (request, response)=>{
    
    let idRequest = request.params.id
                       
let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

response.status(200).send(serieEncontrada)
})

app.listen (8049, ()=>{
console.log("Servidor está rodando na porta 8049!")
})


  
  