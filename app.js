const express = require('express');

const app = express();

const port = process.env.PORT;

const routers = require('./routers/routers')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Rotta base')
});

app.use('/movies', routers)

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})