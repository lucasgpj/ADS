const express = require('express')
const app = express()

app.get("/", (requisicao, resposta) => {
    resposta.send('Estou começando a minha vida com back-end. Que tristeza!')
})

app.listen(3000, () => {
    console.log('App rodando na 3000')
})