const express = require('express');

const app = express();
const port = process.env.PORT;

const routers = require('./routers/routers');
const errorHandler = require('./middlewares/error');
const notFound = require('./middlewares/routesNotFound');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Rotta base')
});

app.use('/movies', routers)

app.use(notFound)

app.use(errorHandler)



app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})