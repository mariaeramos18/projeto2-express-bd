import express from "express"
const app = express()

//criando a rota raiz
app.get('/', (req, res) => {
  res.send('Minha API REST com Express!')
})
export default app
