const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({
    extended: true
}))

const basePath = path.join(__dirname, 'templates' )

app.use(express.static('public'))

app.get ('/', (req, res)=> {
    res.sendFile(`${basePath}/home.html`)
})
app.get ('/home/cadastro', (req, res)=> {
    res.sendFile(`${basePath}/cadastro.html`)
})
app.post("/home/enviar", (req, res)=>{
    const nome = req.body.nome
    const placa = req.body.placa
    const modelo = req.body.modelo

    console.log(`
        Usuario: ${nome}
        placa: ${placa}
        modelo: ${modelo}
    `)
    const popupMessage = "Parabéns, esperamos ver você no evento.";
    res.send(`
        <script>
            alert("${popupMessage}");
            window.location.href = "/";
        </script>
    `);
})


app.listen(5000)