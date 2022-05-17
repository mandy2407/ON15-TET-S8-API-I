const express = require("express")
const app = express()

app.get ("/Netmandy", (request, response)=>{
    response.status(200).json(["Seja bem vindo à maior plataforma de séries e filmes do Brasil.Tudo certo!"])
})

app.get("/filmes", (request, response)=> {
    response.status(200).json(["Aqui estão os filmes disponíveis, se divirta!"])
})

app.get("/series", (request, response)=> {
    response.status(200).json(["Aqui estão os séries disponíveis, se divirta!"])
})

app.listen (8049, ()=>{
console.log("Servidor está rodando na porta 8049!")
})


  
  