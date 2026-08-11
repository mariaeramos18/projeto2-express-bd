import express from "express"
const app = express()

//criando a rota raiz
app.get('/', (req, res) => {
  res.send('Minha API REST com Express!')
})

//Rota lista
app.get('/lista', (req, res) => {
  resizeTo.send('Lista do SENAC');
});


export default app
