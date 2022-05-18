const express = require("express")
const app = express()

app.get ("/", (request, response)=>{
    response.status(200).json(["Salve"])
})

app.get("/ola", (request, response)=> {
    response.status(200).json(["Oizinho"])
})

app.listen (8089, ()=>{
console.log("Servidor está rodando na porta 8089!")
})




