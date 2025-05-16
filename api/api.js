import express from "express"

const app = express() // Utiliza a função express
const PORT = 3000 // Porta de saída e entrada do servidor

const Carro = { marca: "Chevrolet", modelo: "Prisma", ano: 2007, cor: "Prata"}

app.get("/", (req, res) => { // App.get (MÉTODO GET) normalmente requisições pelo navegador
    //res.send(`<h1>Seja bem-vindo</h1><div><p>Você está na PORTA: ${PORT}</p></div>`)
    res.json(Carro)  // Retorna o objeto Carro
})

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`)) // App.listen escuta a PORT, para operar o servidor.

// vai colocar na mao? os role, dps tem q criar uma pagina p add produto
// Tou com um papel que escrevi um rascunho do projeto, qnd eu chegar em casa, digitalizo e te mando.